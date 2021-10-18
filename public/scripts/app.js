// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"

$(() => {

  fetchData();

  const $form = $("#new-order-form");
  $form.on("submit", function (event) {
    event.preventDefault();

    const serializedData = $(this).serialize();

    $.post("/orders", serializedData, (response) => {
      //onsole.log(response)
      fetchData();
    });
    console.log('form submitted!');

  });


});



/*
fetchData makes a GET request to server
server pushes data from the sql query

passing endpoint as a variable for code re - use
  /api/menu
  /api/orders

*/
const fetchData = (endpoint) => {
  $.ajax({
    url: `${endpoint}`,
    method: "GET",
    dataType: "json",
    success: (data) => {
      if (endpoint === "/api/menu") {
        //Mays case
        renderItems(data);
        generate;

        //Hasan case
      } else if (endpoint === '/api/orders')
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
}



const renderMenu = (items) => {
  // clear out menu-container
  const $menuContainer = $(".menu-container");
  $menuContainer.empty();

  // repopulate menu-container
  for (const item of items) {
    const $item = createItem(item);
    $menuContainer.prepend($item);
  }
}
