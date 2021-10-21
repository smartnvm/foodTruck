// Client facing scripts here
// work in progress
// not sure if need to split between "orders" and "menu items"



$(() => {


  $('.set-time-button').click(function () {
    const id = $(this).attr('id');
    const estimated_time = $(this).attr('data-time');
    //const order_time


    // notifyCustomer();


    // notifyCustomer([estimated_time]);


    $.post({
      url: "/orders/update",
      data: JSON.stringify(estimated_time),
      dataType: "json",
      notifyCustomer: (data) => {
        console.log('THank you\n', data);
      }
    });

  });


  $('.set-time-button').click(function () {



    $.post("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
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
