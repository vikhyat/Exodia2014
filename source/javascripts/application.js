//= require vendor/jquery
//= require vendor/jquery.cookie
//= require vendor/modernizr
//= require vendor/fastclick
//
//= require foundation/foundation
//= require foundation/foundation.offcanvas
//
// Development only -- remove later!
//
//= require vendor/placeholder

$(function() {
  $(document).foundation();
  $(".left-off-canvas-toggle").click(function() {
    $("html, body").animate({scrollTop: 0}, 'fast');
  });
});
