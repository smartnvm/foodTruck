// Owner-side JS logic will go here
  // THe dynamic order details will be here
  // The SQL queries will be here






  $(() => {

    const createOrder = function(order) {
      const $order = $(`

        <section class="orders-container">

          <main class="order-box">

            <div class="set-time">
              <button class="set-time-button">15 MIN</button>
              <button class="set-time-button">30 MIN</button>
              <button class="set-time-button">45 MIN</button>
            </div>

            <div class="order-details">
              <div class="order-number">Order#: 100123555</div>
              <table class="order-line">
                <tr class="order-line">
                  <td class="order-qty">2x</td>
                  <td class="order-item">Chicken Tandoori</td>
                </tr>
              </table>
              <div class="order-notes">Note: Add Raisins</div>
            </div>

            <div class="order-fulfilled">
              <button class="order-fulfilled-button" type="button">Checkmark</button>
            </div>

          </main>

          <footer class="order-time">
            <div class="time-ordered">12 min ago</div>
            <div class="time-remaining">20 min remaining</div>
          </footer>

        </section>
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





  });









