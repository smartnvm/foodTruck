// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"

$(() => {

  const endpoint = '/api/menu';
  console.log(`-------- ${endpoint} ------------`);
  fetchData(endpoint);

});



/*
fetchData makes a GET request to server
server pushes data from the sql query

passing endpoint as a variable for code re - use
  /api/menu
  /api/orders

*/
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
