// Client facing scripts here
/*
$(() => {

  fetchData();

  const $form = $("#new-tweet-form");
  $form.on("submit", function (event) {
    event.preventDefault();

    let chars = $('#tweeter-text').val().length;

    if (!validateForm(chars)) return;

    const serializedData = $(this).serialize();

    $.post("/tweets", serializedData, (response) => {
      //onsole.log(response)
      fetchTweets();
    });
    console.log('form was submitted, reset text area');

    $('#tweeter-text').val('');
  });

});





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



const generateTweets = (tweets) => {
  // clear out blog-container
  const $tweetContainer = $(".tweet-container");
  $tweetContainer.empty();

  // repopulate blog-container
  for (const tweet of tweets) {
    const $tweet = createTweet(tweet);
    $tweetContainer.prepend($tweet);
  }
}
*/
