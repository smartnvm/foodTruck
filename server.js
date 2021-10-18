//helper functions
const { varInit,
  authenticateUser,
  getUserByEmail } = require('./lib/utils');


// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");

const app = express();
const router = express.Router();

const morgan = require("morgan");

//dependency
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
const menuRoutes = require("./routes/menu");
const adminRoutes = require("./routes/admin");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

// DO NOT use usersRoutes - not needed for now
// app.use("/api/users", usersRoutes(router, db));

//ordersRoutes => customer_view (Mays)
//menu categories / food items /  cart and order form
//I suppose we could render a single page for SPA behaviour
//not sure how to go about the html
app.use("/api/menu", menuRoutes(router, db));

//adminRoutes => owner_view (Hasan)
//login , active orders , orders history
//my thinking is to render different pages
//I suppose we could render a single page for SPA behaviour
//not sure how to go about the html
app.use('/', adminRoutes(router, db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  //initialize template variable,
  //if we are here we are not logged in

  const templateVars = varInit(false, null, null, null);
  res.render("landing", templateVars);
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



