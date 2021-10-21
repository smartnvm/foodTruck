// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"



$(() => {


  $('.set-time-button').click(function () {
    const id = 2// $(this).attr('id');
    const estimated_time =  $(this).attr('data-time');
    //const order_time

    const order = {

      id: 2,
      estimated_time: estimated_time
    }

    // notifyCustomer([estimated_time]);


    $.ajax({
      type: "POST",
      url: "/orders/update",
      data: order,
      dataType: "json",
      success:  (data) => {
        console.log('THank you\n', data);
      }
    });

  });

});


notifyCustomer = (params) => {
  //const serializedData = params.serialize();



};


const fetchOrders = () => {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: (tweet) => {
      generateTweets(tweet);
    },
    error: (err) => {
      console.log(`there was an error: ${err}`);
    },
  });
};
