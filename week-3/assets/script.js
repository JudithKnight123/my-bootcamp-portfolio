  $( function() {
    $( "#tabs-block1" ).tabs();
    $( "#tabs-block2" ).tabs();
  } );

  $(document).ready(function () {

    // show button when scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#scrollTopBtn").fadeIn();
        } else {
            $("#scrollTopBtn").fadeOut();
        }
    });

    // click to scroll to top
    $("#scrollTopBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

});