$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar navbar-default navbar-fixed-bottom");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function (){
$( "#resbutton" ).click(function() {
  $( ".img-fluid" ).slideToggle( "slow" );
});
});
