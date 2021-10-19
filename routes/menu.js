/*
 * All routes for orders are defined here
 * Since this file is loaded in server.js into api/orders,
 *   these routes are mounted onto /orders
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

//helper functions
const { varInit,
  authenticateUser,
  getUserByEmail } = require('../lib/utils');


module.exports = (router, db) => {
  router.get("/api/menu", (req, res) => {


    const id = 1
    let query = `SELECT * FROM categories where id  > $1`;
    console.log(query);


    db.query(query,[id])
      .then(data => {
        const categories = data.rows;
        //res.send({categories})
        //  return
        res.render('cart', { categories });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });





  const getCategoryItems = function (id) {
    const strQuery = `SELECT * FROM items
    JOIN categories ON categories.id = category_id
    WHERE category_id = $1`;

    return db
      .query(strQuery, [id])
      .then((dBres) => dBres.row)
      .catch((err) => {
        console.log(err.message);
      });
  };
  exports.getCategoryItems = getCategoryItems;




  router.get("/new", (req, res) => {

    res.send('this is new order page');
    return
    let query = `SELECT * FROM orders`;
    console.log(query);
    db.query(query)
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  router.get("/mycart", (req, res) => {
    // res.send('this is myCart page');

    //initialize template variable,
    //if we are here we are not logged in
    const templateVars = varInit(false, null, null, null);
    // res.render('cart', templateVars);

    let query = `SELECT * FROM orders`;
    console.log(query);
    db.query(query)
      .then(data => data.rows)
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });




// all test endpoint go here


router.post("/api/mays", (req, res) => {
  //once a user checks out
  //takes to a form this would the endpoint for PLACE ORDER

  //parse the body of the cart
  cart = req.body

  // cat = {
  //   qty: 2
  //   item.id: 10
  //   category_id:

  // }

  //  5 would come from the front end on a POST
  const id = 5
  let query = `SELECT * FROM categories where id  = $1`;
  console.log(query);


  db.query(query,[id])
    .then(data => {
      const categories = data.rows;
      res.send({categories})
      return
      res.render('cart', { categories });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});




  return router;
};
