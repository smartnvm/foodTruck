// Owner-side JS logic will go here
// THe dynamic order details will be here
// The SQL queries will be here



const orderDb = [
  {
    "id": 1,
    "order-id": 12345678,
    "time-stamp": Date.now(),
    "order-items": '2x Chicken Tandoori',
    "order-notes": 'Note:  No garlic sauce'
  },
  {
    "id": 2,
    "order-id": 24682468,
    "time-stamp": Date.now(),
    "order-items": '1x Beef Kabab',
    "order-notes": 'Note:  No mayonnaise'
  },
  {
    "id": 3,
    "order-id": 36936936,
    "time-stamp": Date.now(),
    "order-items": '4x Caesar Salad',
    "order-notes": 'Note:  Extra croutons'
  }
];




$(() => {


  console.log('we are inside orders.js')

  fetchOrders();

});


// making a get request to see tweets
const fetchOrders = () => {
  $.ajax({
    url: "/orders/active",
    method: "GET",
    dataType: "json",
    success: (data) => {
      console.log('data:', data)
      generateOrders(data)
    },
    error: (err) => {
      console.log(`there was an error: ${err}`)
    }
  })
}


const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const generateOrders = (orders) => {
  // clear out order-container
  const $orderContainer = $(".orders-container");
  $orderContainer.empty();

  // repopulate order-container
  for (const order of orders) {


    const $order = createOrder(order);
    $orderContainer.append($order);
  }
};



const createOrder = function (order) {
  const $order = $(`

      <section class="order-box">
        <main class="order-details">

          <div class="set-time">
            <button class="set-time-button">15 MIN</button>
            <button class="set-time-button">30 MIN</button>
            <button class="set-time-button">45 MIN</button>
          </div>

          <div class="order-items">
            <div class="order-number">Order#: ${order.id}</div>
            <div class="order-line">${order.name}</div>
            <div class="order-notes">${order.description}</div>
          </div>

          <div class="order-fulfilled">
            <button class="order-fulfilled-button" type="button">
            <i class="fa-solid fa-check"></i>
            </button>
          </div>

        </main>

        <footer class="order-time">
          <div class="time-ordered">${timeago.format(order['time-stamp'])}</div>
          <div class="time-remaining"><span id="time"></span> ${order.price}min remaining</div>
        </footer>
      </section>

    `);

  return $order;
};





function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);

  return display
}
