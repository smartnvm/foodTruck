$(()=> {
  $("button.cart").click(()=>{
    $("div.container").slideToggle("slow");
    $("div.container section ").focus()
    });
    $("button#order").click(()=>{
      $("div.container").slideToggle("slow");
      $("div.container section").focus()
      });
      // $("button.header_icon").click(()=>{
      //   $("div.side_bar").toggle( "slow" );
      //   $("div.side_bar section").focus()
      //   });


        // const pushToCart = (userId,
        //   orderId, itemId, desc, qty, price) => {
        //   const tempCart = {
        //     [userId]: {
        //       userId, orderId, itemId, desc, qty, price
        //     }
        //   };
        //   return tempCart;
        // };
        // //write to cookie with cart param
        // //initialize cart parameter to session
        // //the values are retreievd from sql query
        // //select id, order_number, item_description, item_order.qty
        // req.session.user_id = user.id;
        // req.session.item_id = '5';
        // req.session.order_id = '514646';
        // req.session.description = 'this is beef qorma';
        // req.session.quantity = '1';
        // let myCart = pushToCart(
        //   req.session.user_id,
        //   req.session.order_id,
        //   req.session.description,
        //   req.session.quantity);
        // userId = req.session.user_id;
        // orderId = req.session.order_id;
        // itemId = req.session.item_id;
        // desc = req.session.description;
        // qty = req.session.quantity;
        // myCart = pushToCart(
        //   userId, orderId, itemId, desc, qty);
        // myCart['0'].qty++;
        // myCart['0'].qty++;
        // myCart['0'].qty++;
        // myCart['0'].qty++;
        // myCart['0'].qty++;
        // myCart['0'].qty++;
        // myCart['0'].qty++;
        // myCart['0'].qty--;
        // if (myCart['0'].qty === 0) delete myCart['0'];
    // let counter = 0
    // $("button#order").click(()=>{
    //   counter++;
    //   const $price = $("p.qty").val

    //   });

    $(function() {
      $('.minus,.add').on('click', function() {
        let $qty = $(this).closest('p').find('.qty'),
          currentVal = parseInt($qty.val()),
          isAdd = $(this).hasClass('add');
        !isNaN(currentVal) && $qty.val(
          isAdd ? ++currentVal : (currentVal > 0 ? --currentVal : currentVal)
        );
      });
    });


  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  const fetchData = (endpoint) => {
    $.ajax({
      url: `${endpoint}`,
      method: "GET",
      dataType: "json",
      success: (data) => {
        if (endpoint === "/api/menu") {
          //Mays case
          generateItems(data);

        } else if (endpoint === '/api/orders')
          //Hasan case
          generateOrders(data);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      }
    });
  }

fetchData(endpoint);
const renderitems = function(items) {
  $("section.cart_element").empty();
  for (const item of items) {
    const $item = createItemElement(item);
    $("section.cart_element").prepend($item);
  }
};
const createItemElement = function(itemArr) {
/* creating the tweet element */
  const $item = $("<article>").addClass("item");
  const item_conainer= `
  <header class="header_name">
      <div class="avatar_name">

      <span class="name-of-avatar">${itemArrArr.user.name} </span>
      </div>
      <span class = "handle" >${itemArrArr.user.handle} </span>
  </header>
  <div>
    <p class="pcolor" >${tweetArr.content.text}
    </p>
    <hr class='line'>
  </div>
  <footer>
      <span class="timeago"> ${timeago.format(tweetArr.created_at)} </span>
      <ul class="icon">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
      </ul>
  </footer>
  `;
  $item.append(item_conainer);
  return $item;
};
const $form = $("#new-tweet-form");
$form.on("submit", function(event) {
  event.preventDefault();
  $('#error').empty();
  $('#error').hide();
const $tweetNew = $('.new-tweet textarea').val();

if ($tweetNew.length > 140) {
   $("#error").text("❌limit are 140 words🛑🚫");
   $("#error").slideDown("slow");

} else if (!$tweetNew.length){
  $("#error").text("❌ error empty text🛑🚫");
  $("#error").slideDown("slow");
}
else{

  const serializedData = $(this).serialize();
  $.post("/tweets", serializedData, (response) => {
    loadTweets();
    $('.new-tweet textarea').val("");
  })

}
});

});
