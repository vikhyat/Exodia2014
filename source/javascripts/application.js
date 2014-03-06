//= require vendor/jquery
//= require vendor/jquery.cookie
//= require vendor/modernizr
//= require vendor/fastclick
//= require vendor/jquery-1.9.1.min
//= require vendor/raphael-min
//= require vendor/jquery.lazylinepainter-1.4.1
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
