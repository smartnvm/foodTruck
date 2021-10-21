// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"



$(() => {

  console.log('orders.js script ejs ');
  $('.set-time-button').click(function () {

    const id = $(this).attr('data-id');
    const order_no = $(this).attr('data-order_no');
    const order_time = $(this).attr('data-order_time');
    const estimated_time = $(this).attr('data-estimated_time');

    const order = {
      id, order_no, order_time, estimated_time,
    };

    console.log(order)
    notifyCustomer(order);



  });

});


notifyCustomer = (data) => {
  console.log(data);

  $.ajax({
    type: "POST",
    url: "/orders/update",
    data: data,
    dataType: "json",
    success: (data) => {
      console.log('xxxxxxxxxxxxupdated time', data);
    }
  });
};

// ${ timeago.format(tweet.created_at); }


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
