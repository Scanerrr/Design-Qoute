/* MAIN js */
$(function() {
  smoothSroll(400);
  backToTopBtn();
  menuBtn();
  //implements fittext
  $(".slogan h1").fitText(0.4, { minFontSize: '80px', maxFontSize: '220px' });
  $(".slogan p").fitText(1.38, { minFontSize: '22px', maxFontSize: '64px' });
  $(".quote .theme").fitText(1.3, { minFontSize: '22px', maxFontSize: '30px' });
  $(".quote .text").fitText(1.3, { minFontSize: '14px', maxFontSize: '20px' });
  $(".quote .author").fitText(1.3, { minFontSize: '14px', maxFontSize: '20px' });
  $(".lead-head").fitText(1.3, { minFontSize: '32px', maxFontSize: '60px' });
  $(".lead-text p").fitText(1.3, { minFontSize: '14px', maxFontSize: '20px' });
  $(".main-text p").fitText(1.3, { minFontSize: '14px', maxFontSize: '20px' });
  $(".description").fitText(1.3, { minFontSize: '14px', maxFontSize: '20px' });
  $(".main-area .quote-text").fitText(0.8, { minFontSize: '52px', maxFontSize: '80px' });

});

// SMOOTH SCROLLING TO TOP
function smoothSroll(duration) {
  var top_btn = $(".top_btn");
  top_btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, duration);
  });
}

// SHOW BACK TO TOP BUTTON
function backToTopBtn() {
  var top_btn = $(".top_btn");
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      top_btn.fadeIn();
    } else {
      top_btn.fadeOut();
    }
  });
}

/* MENU */
function menuBtn() {
  toggleMenu('open');
  toggleMenu('close');
}
// SHOW-HIDE MENU LIST
function toggleMenu(status) {
  var menuShowBtn = $('.nav-menu'),
      menuCloseBtn = $('.close-btn'),
      menu = $('.is-displayed');
  if (status == 'close') {
    $(menuCloseBtn).on('click', function() {
      $(menu).toggle(300);
      $(menuShowBtn).show(300);
      $(menuCloseBtn).toggle(300);
    });
  }
  if (status == 'open') {
    $(menuShowBtn).on('click', function() {
      $(menu).toggle(300);
      $(menuShowBtn).hide(300);
      $(menuCloseBtn).toggle(300);
    });
  }
}

/* jQuery fittext plugin */
(function($) {

    $.fn.fitText = function(kompressor, options) {

        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);

        return this.each(function() {

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})(jQuery);