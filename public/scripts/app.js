// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"



$(() => {

  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    renderItems(cart);
  }

  $('.addItem').click(function () {
    const id = $(this).attr('id');
    const price = $(this).attr('data-price');
    const desc = $(this).attr('data-description');

    //let qty = Number(sessionStorage.getItem('qty'))+ 1;

    //initCart(0, 10001, id, desc, qty, price);
    // console.log( id, price, desc)

    addItem(id, desc, price);

  });


  $('.delItem').click(function () {
    const id = $(this).attr('id');
    const price = $(this).attr('data-price');
    const desc = $(this).attr('data-description');

    delItem(id, desc, price);
  });


});



function addItem(itemId, desc, price) {

  let cart = {};
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    renderItems(cart);
  }

  if (!cart[itemId]) {
    cart[itemId] = {
      qty: 0,
      desc: desc,
      lineTotal: 0
    };
  }

  cart[itemId].qty++;
  cart[itemId].lineTotal = cart[itemId].qty * Number(price);

  localStorage.setItem('cart', JSON.stringify(cart));
  renderItems(cart);
}


// If you want to remove product, you can do it like so:

function delItem(itemId, desc, price) {

  let cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
  if (cart[itemId]) {
    if (cart[itemId].qty === 1) {
      delete cart[itemId];
      localStorage.setItem('cart', JSON.stringify(cart));
      renderItems(cart);
      return;
    }

    cart[itemId].qty--;
    cart[itemId].lineTotal = cart[itemId].qty * Number(price);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderItems(cart);
  }

}




const renderItems = (items) => {
  // clear out blog-container
  const $cartContainer = $("#rightbar");
  $cartContainer.empty();
  let subtotal = 0;

  // repopulate blog-container
  for (const item in items) {
    const $item = createItem(items[item]);
    $cartContainer.append($item);
    subtotal += Number(items[item].lineTotal);
  }
  subtotal = subtotal / 100;
  const $total = $(`
  <div style = "text-align: right;border-top:solid 2px black"> subtotal: $${(subtotal)}</div>
  <div style = "text-align: right;">HST (13%):$${(subtotal * 0.13).toFixed(2)}</div>
  <div style = "text-align: right; font-weight: bold;">
  TOTAL:$${(subtotal * 1.13).toFixed(2)}</div>`);

  $cartContainer.append($total);

};

const createItem = (item) => {

  const $lineItem = $(`
      <div id="rightbar">
        ${item.qty}x \t ${item.desc} \t $${item.lineTotal / 100}
        </div>`);
  return $lineItem;
};


/*
fetchData makes a GET request to server
server pushes data from the sql query

passing endpoint as a variable for code re - use
  /api/menu
  /api/orders

*/
/*
const fetchData = (endpoint) => {
console.log('fetchdata-------------,',endpoint)
  $.ajax({
    url: `${endpoint}`,
    method: "GET",
    dataType: "json",
    success: (data) => {
      console.log(data);
      if (endpoint === "/api/menu") {
        //Mays case
        renderMenu(data);

        //Hasan case
      } else if (endpoint === '/orders')
        renderOrders(data);
    },
    error: (err) => {
      console.log(`there was an error: ${err}`);
    }
  });
};


const renderOrders = (orders) => {
  // clear out order-container
  const $orderContainer = $(".orders-container");
  $orderContainer.empty();

  // repopulate order-container
  for (const order of orders) {
    const $order = createOrder(order);
    $orderContainer.append($order);
  }
};



const renderMenu = (items) => {
  // clear out menu-container
  const $menuContainer = $(".menu-container");
  $menuContainer.empty();

  // repopulate menu-container
  for (const item of items) {
    const $item = createItem(item);
    $menuContainer.append($item);
  }
};


const createItem = (tweet) => {

  const $tweet = $(`
  <article class="tweet">
    <header>
    <div class='profile'>
        <img src="${tweet.user.avatars}">
        <p>${tweet.user.name}</p>
    </div>tweet
        <div class ='handle'>${tweet.user.handle}</div>
      </header>

      <div class='body'>
        <span>${escape(tweet.content.text)}</span>
      </div>
      <br>
      <footer>
        <span class class="tweetage">${timeago.format(tweet.created_at)}</span>
        <div class="reactions">
          <i class="fa fa-xs fa-flag"></i>
          <i class="fa fa-xs fa-retweet"></i>
          <i class="fa fa-xs fa-heart"></i>
        </div>
      </footer>

    </article>`);
  return $tweet;
};
*/
