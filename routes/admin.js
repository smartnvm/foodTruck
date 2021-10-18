/*
 * All routes for admin are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

//helper functions
const { varInit,
  authenticateUser,
  getUserByEmail } = require('../lib/utils');


//login users
const usersdB = require('../lib/admin');

module.exports = (router, db) => {

  router.get("/test", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.get("/login", (req, res) => {
    //check if we are already logged in
    const userId = req.session.user_id;
    console.log('viewsjs router:', userId);
    if (userId && usersdB[userId]) {
      res.redirect('/orders');
      return;
    }
    //initialize template variable,
    //if we are here we are not logged in
    const templateVars = varInit(false, null, null, null);
    res.render('login', templateVars);
  });


  router.get("/orders", (req, res) => {
    const userId = req.session.user_id;
    const user = usersdB[userId];

    //check if user is logged in, and redirect to login if not
    if (!user) {
      const templateVars = varInit(false, 403, null, null);
      res.render("login", templateVars);
      return;
    }

    //initalize template variable before passing to ejs view
    const templateVars = varInit(true, 200, user, null);
    res.render("menu_index", templateVars);
  });






  router.post("/login", (req, res) => {
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
    res.render('login', templateVars);
    return;

  });

  router.post("/logout", (req, res) => {
    //clears cookie and redirect to login page
    req.session = null;
    const templateVars = varInit(false, 200, null, null);
    res.render('landing', templateVars);
    return;
  });



  router.get("/me", (req, res) => {
    const userId = req.session.user_id;
    if (!userId) {
      res.send({ message: "not logged in" });
      return;
    }
    res.send(usersdB[userId].name);

    return;
    db.getUserWithId(userId)
      .then(user => {
        if (!user) {
          res.send({ error: "no user with that id" });
          return;
        }

        res.send({ user: { name: user.name, email: user.email, id: userId } });
      })
      .catch(e => res.send(e));
  });

  router.post('/', (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    db.addUser(user)
      .then(user => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send("🤗");
      })
      .catch(e => res.send(e));
  });





























  router.get('/properties', (req, res) => {
    db.getAllProperties(req.query, 20)
      .then(properties => res.send({ properties }))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    db.getAllReservations(userId)
      .then(reservations => res.send({ reservations }))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    db.addProperty({ ...req.body, owner_id: userId })
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  return router;
};
