// Owner-side JS logic will go here
  // THe dynamic order details will be here
  // The SQL queries will be here



  const orderDb = [
    { "id": 1,
      "order-id": 12345678,
      "time-stamp": Date.now(),
      "order-items": '2x Chicken Tandoori',
      "order-notes": 'No garlic sauce'
    },
    { "id": 2,
    "order-id": 24682468,
    "time-stamp": Date.now(),
    "order-items": '1x Beef Kabab',
    "order-notes": 'No mayonnaise'
    },
    { "id": 3,
    "order-id": 36936936,
    "time-stamp": Date.now(),
    "order-items": '4x Caesar Salad',
    "order-notes": 'Extra croutons'
    }
  ]




  $(() => {

const date = new Date();
const time = date.getMinutes();
// const minutes = time.getMinutes();

// pseudo code for calculating remaining time
// get start time
// add cook time to start time to get end time
// subtract end time from current time


// const remainingTime = function(startTime) {
//   let remainTime = Date.now() -

// }


// const countDownDate = new Date("Oct 18, 2021 19:26:52").getTime();

// const timer = setInterval(function() {
//   let now = new Date().getTime();
//   let timeLeft = countDownDate - now;
//   let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   return minutes;
// }, 1000);



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
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};



    const createOrder = function(order) {
      const $order = $(`

          <main class="order-box">

            <div class="set-time">
              <button class="set-time-button">15 MIN</button>
              <button class="set-time-button">30 MIN</button>
              <button class="set-time-button">45 MIN</button>
            </div>

            <div class="order-details">
              <div class="order-number">Order#: ${order['order-id']}</div>
              <div class="order-line">${order['order-items']}</div>
              <div class="order-notes">${order['order-notes']}</div>
            </div>

            <div class="order-fulfilled">
              <button class="order-fulfilled-button" type="button">
              <i class="fa-solid fa-check"></i>
              </button>
            </div>

          </main>

          <footer class="order-time">
            <div class="time-ordered">${timeago.format(order['time-stamp'])}</div>
            <div class="time-remaining"><span id="time"></span> min remaining</div>
          </footer>

      `)
      return $order;
    }


    const generateOrders = (orders) => {
      // clear out order-container
      const $orderContainer = $(".orders-container");
      $orderContainer.empty();

      // repopulate order-container
      for (const order of orders) {
        const $order = createOrder(order);
        $orderContainer.prepend($order);
      }
    }

    generateOrders(orderDb);



/*

    const fetchData = (endpoint) => {
      $.ajax({
      url: `${endpoint}`,
      method: "GET",
      dataType: "json",
      success: (data) => {
        if (endpoint === "/api/menu") {
          //Mays case
          generateItems(data);
          generate;

        //Hasan case
        } else if (endpoint === '/api/orders')
          generateOrders(data);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      }
    });
  };

*/



  });









