// Owner-side JS logic will go here
// THe dynamic order details will be here
// The SQL queries will be here






$(() => {

  console.log('we are inside xorders.js');
  // fetchOrders();


  $('.set-time-button').click(function () {
    console.log('wtf click');
    const id = 2;// $(this).attr('id');
    const estimated_time = $(this).attr('data-time');
    //const order_time

    console.log(estimated_time);

    const order = {
      id: 2,
      estimated_time: estimated_time
    };

    // notifyCustomer([estimated_time]);
    $.ajax({
      type: "POST",
      url: "/orders/update",
      data: order,
      dataType: "json",
      success: (data) => {
        notifyCustomer(data);

      }
    });

  });



});


notifyCustomer = (data) => {
  console.log(data);
};







// making a get request to see tweets
const fetchOrders = () => {
  $.ajax({
    url: "/orders/fetch",
    method: "GET",
    dataType: "json",
    success: (data) => {
      generateOrders(data);
    },
    error: (err) => {
      console.log(`there was an error: ${err}`);
    }
  });
};
//

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
    console.log('dataxxxxxxxxxxxxxxxxxxxxxxxxxxx:', order);
    const $order = createOrder(order);
    $orderContainer.append($order);
  }
};


/*{
id: 1,
customer_id: 1,
order_no: "05b9f945-1",
order_time: "2021-10-21T02:35:47.464Z",
order_note: " saasfaf ",
estimated_time: null,
completed_time: null,
completed: false
},*/

const createOrder = function (order) {
  const $order = $(`

  <div class="foodItem" style="
  border: solid 5px rgb(119, 202, 126);
  padding: 10px;
  margin: 5px;
  min-width: 90%;
   overflow-wrap: break-word;
   ">

      <section class="order-box">
        <main class="order-details">

          <div class="set-time "
          style="display: flex;
          flex-direction: column;
          height: 100%;
          flex-flow: column;">

            <button type="button" class="set-time-button btn btn-outline-warning" data-time="15">15 MIN</button>
            <button type="button" class="set-time-button btn btn-outline-warning" data-time="30">30 MIN</button>
            <button type="button" class="set-time-button btn btn-outline-warning" data-time="45">45 MIN</button>
          </div>

          <div class="order-items">
            <div class="order-number" data-order_no="${order.id}" style="text-align: center;"> <b>Order#: ${order.id} </b></div>

            <div class="order-line" data-order_no="${order.order_no}">${order.order_no}</div>
            <div class="${order.order_note}">${order.order_note}</div>
          </div>

          <div class="order-fulfilled">

            <button type="button" class="order-fulfilled-button btn btn-outline-success"data-completed="false"><i class="fa-solid fa-check"></i></button>

          </div>

        </main>

        <footer class="order-time">
          <div class="time-ordered">${timeago.format(order.order_time)}</div>
          <div class="time-remaining"><span id="time"></span> ${order.completed}min remaining</div>
        </footer>


      </section>


  </div>



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

  return display;
}

