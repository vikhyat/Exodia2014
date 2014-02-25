//= require vendor/jquery
//= require vendor/jquery.cookie
//= require vendor/modernizr
//= require vendor/fastclick
//
//= require foundation/foundation
//= require foundation/foundation.offcanvas
//= require foundation/foundation.tooltip
//= require foundation/foundation.clearing

$(function() {
  $(document).foundation();
  $(".left-off-canvas-toggle").click(function() {
    $("html, body").animate({scrollTop: 0}, 'fast');
  });
});
