(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          500,
          'easeInOutExpo'
        );

        $('#mainNav').removeClass('navbar-shadow');

        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function(e) {
    var mainNav = $('#mainNav').offset().top;

    var devTop = Math.round($('#dev').offset().top);
    var devBottom = devTop + Math.round($('#dev').outerHeight());
    var languagesTop = Math.round($('#languages').offset().top);
    var languagesBottom = languagesTop + Math.round($('#languages').outerHeight());
    var snippetTop = Math.floor($('#snippet').offset().top);
    var snippetBottom = snippetTop + Math.round($('#snippet').outerHeight());
    var osTop = Math.round($('#os').offset().top);
    var osBottom = osTop + Math.round($('#os').outerHeight());
    var contactTop = Math.round($('#contact').offset().top);
    var contactBottom = contactTop + Math.round($('#contact').outerHeight());
    
    // Landing
    if (mainNav < devTop && mainNav > 100) {
      $('#mainNav').addClass('bg-violet');
    } else {
      $('#mainNav').removeClass('bg-violet');
    }

    // Development Section
    if (mainNav < devBottom && mainNav >= devTop) {
      $('#mainNav').addClass('bg-midnight-blue');
    } else {
      $('#mainNav').removeClass('bg-midnight-blue');
    }

    // Languages
    if (mainNav < languagesBottom && mainNav >= languagesTop) {
      $('#mainNav').addClass('bg-white');
      $('#mainNav a').addClass('text-dark');
      $('#mainNav a').addClass('nav-dark');
    } else {
      $('#mainNav').removeClass('bg-white');
      $('#mainNav a').removeClass('text-dark');
      $('#mainNav a').removeClass('nav-dark');
    }

    // Code Snippets
    if (mainNav < snippetBottom && mainNav >= snippetTop) {
      $('#mainNav').addClass('bg-dark-gray');
      $('#mainNav a').addClass('text-darker');
      $('#mainNav a').addClass('nav-darker');
    } else {
      $('#mainNav').removeClass('bg-dark-gray');
      $('#mainNav a').removeClass('text-darker');
      $('#mainNav a').removeClass('nav-darker');
    }

    // Operating Systems
    if (mainNav < osBottom && mainNav >= osTop) {
      $('#mainNav').addClass('bg-crimson');
    } else {
      $('#mainNav').removeClass('bg-crimson');
    }

    // Contact Section
    if (mainNav < contactBottom && mainNav >= contactTop) {
      $('#mainNav').addClass('bg-brown');
    } else {
      $('#mainNav').removeClass('bg-brown');
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
