// load .env data into process.env
require("dotenv").config();

const { varInit, authenticateUser, getUserByEmail } = require('./lib/utils');

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.
const usersdB = require('./lib/admin');



// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

const session = require("cookie-session");
app.use(session({
  name: 'session', keys: ['test'],
  maxAge: 24 * 60 * 60 * 1000
}));




// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const users = require("./routes/users");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
   //initialize template variable,
  //if we are here we are not logged in
  const templateVars = varInit(false, null, null, null);
  res.render("index",templateVars);
});




app.get("/admin", (req, res) => {
  //check if we are already logged in
  const userId = req.session.user_id;
  if (userId && usersdB[userId]) {
    res.redirect('/orders');
    return;
  }
  //initialize template variable,
  //if we are here we are not logged in
  const templateVars = varInit(false, null, null, null);
  res.render('admin', templateVars);
});

app.post("/logout", (req, res) => {
  //clears cookie and redirect to login page
  req.session = null;
  const templateVars = varInit(false, 200, null, null);
  res.render('admin', templateVars);
  return;
});




app.get("/orders", (req, res) => {
  const userId = req.session.user_id;
  const user = usersdB[userId];
  console.log('-----users---------')

  //check if user is logged in, and redirect to login if not
  if (!user) {
    const templateVars = varInit(false, 403, null, null)
    res.render("admin", templateVars);
    return;
  }

  //initalize template variable before passing to ejs view
  const templateVars = varInit(true, 200, user, null);
  res.render("menu_index", templateVars);
});


app.post("/admin", (req, res) => {
  //parse user email and password
  const email = req.body.username;
  const password = req.body.password;

  const user = getUserByEmail(email, usersdB);
  console.log('user:', user);

  //authenticate if matching user found
  const authStatus = authenticateUser(email, password, user);

  //authentication success - redirect to orders
  if (user && authStatus.num === 200) {
    req.session.user_id = user.id;
    const templateVars = varInit(true, authStatus.num, user, null);
    res.render('menu_index', templateVars);
    return;
  }

  //authentication failed -
  //redirect to login with appropriate error message
  const templateVars = varInit(false, authStatus.num, user, null);
  res.render('admin', templateVars);
  return;

});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



