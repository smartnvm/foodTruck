$(()=> {
  $("button.cart").click(()=>{
    $("div.container").slideToggle("slow");
    $("div.container section ").focus()
    });
    $("button#order").click(()=>{
      $("div.container").slideToggle("slow");
      $("div.container section").focus()
      });


      $(".open").on("click", function(){
        $(".popup, .popup-content").addClass("active");
        });

        $(".close, .popup").on("click", function(){
          $(".popup, .popup-content").removeClass("active");
          });
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

});
