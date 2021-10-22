// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"



$(() => {

  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    renderItems(cart);
  }

  $('.addItem').click(function () {
    const id = $(this).attr('data-id');
    const price = $(this).attr('data-price');
    const title = $(this).attr('data-title');
    const desc = $(this).attr('data-desc');

    //let qty = Number(sessionStorage.getItem('qty'))+ 1;

    //initCart(0, 10001, id, desc, qty, price);
    // console.log( id,title, price, desc)

    addItem(id, title, desc, price);

  });


  $('.delItem').click(function () {
    const id = $(this).attr('data-id');
    const price = $(this).attr('data-price');
    const title = $(this).attr('data-title');
    const desc = $(this).attr('data-desc');

    delItem(id, title, price);
  });


  $('#placeorder').click(function () {

    console.log('click me');


    cart = JSON.parse(localStorage.getItem('cart'));
    const note = $('#order-note').val();
    cart.note = note;

    localStorage.setItem('cart', JSON.stringify(cart));

    user = {
      name: $('#name').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
    };
    notifyCustomer({ cart, user });

    $('#cartModal').modal('toggle');
    $('#cartModal').modal('toggle');
    $('#order-status').modal('toggle');


  });





});


notifyCustomer = (data) => {
  console.log(data);

  $.ajax({
    type: "POST",
    url: "/orders/new",
    data: data,
    dataType: "json",
    success: (data) => {
      console.log('reset cart', data);
      localStorage.setItem('cart', JSON.stringify({}));

    }
  });
};


function addItem(itemId, title, desc, price) {

  let cart = {};
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    renderItems(cart);
  }

  if (!cart[itemId]) {
    cart[itemId] = {
      id: itemId,
      price: price,
      qty: 0,
      title: title,
      desc: desc,
      lineTotal: 0,
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

  console.log(item);
  const padding = `${item.title} +${item.qty} +${item.lineTotal / 100}`.length;
  const $lineItem = $(`
      <div id="rightbar" style= "display:flex; justify-content:end">
        ${item.qty}x  ${item.title} ${'.'.padStart(40 - padding, '.')}$${item.lineTotal / 100}




        </div>`);
  return $lineItem;
};


  // <i class="addItem btn btn-outline-success fa-solid fa-circle-plus" style="margin-left : 1em" id="item_${item.id}"
        // data-id="${item.id}" data-title="${item.title}" data-desc="${item.desc}"
        // data-price="${item.price}"></i>

        // <i class="delItem btn btn-outline-danger fa-solid fa-circle-minus" id="item_${item.id}"
        // data-id="${item.id}" data-title="${item.title}" data-desc="${item.desc}"
        // data-price="${item.price}"></i>
