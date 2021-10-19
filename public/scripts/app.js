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
    const title = $(this).attr('data-title');
    const desc = $(this).attr('data-desc');

    //let qty = Number(sessionStorage.getItem('qty'))+ 1;

    //initCart(0, 10001, id, desc, qty, price);
    // console.log( id,title, price, desc)

    addItem(id, title, desc,price);

  });


  $('.delItem').click(function () {
    const id = $(this).attr('id');
    const price = $(this).attr('data-price');
    const title = $(this).attr('data-title');
    const desc = $(this).attr('data-desc');

    delItem(id, title, price);
  });


});



function addItem(itemId, title, desc, price) {

  let cart = {};
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    renderItems(cart);
  }

  if (!cart[itemId]) {
    cart[itemId] = {
      qty: 0,
      title: title,
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
        ${item.qty}x \t ${item.title} \t $${item.lineTotal / 100}
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
    $orderContainer.prepend($order);
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
}
*/
