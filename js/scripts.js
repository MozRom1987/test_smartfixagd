/* =======================================================
   KOMPLETNA I POPRAWIONA ZAWARTOŚĆ PLIKU JS/SCRIPTS.JS
   ======================================================= */

(function ($) {
  $(document).ready(function () {
    "use strict";

    // TAB
    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });

    // LOGO HOVER
    $(".site-menu ul li").hover(function () {
        $('.site-menu ul li').not(this).css({ "opacity": "1" });
      },
      function () {
        $('.site-menu ul li').not(this).css({ "opacity": "1" });
      });

    // HAMBURGER MENU
    $('.hamburger-menu').on('click', function (e) {
      $(this).toggleClass('open');
      $(".side-widget").toggleClass('active');
      $("body").toggleClass("overflow");
    });

    // PAGE TRANSITION
    $('body a').on('click', function (e) {
      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");

      // Ignoruj linki-kotwice (#), linki otwierane w nowej karcie, linki fancybox, tel i mailto
      if (target != '_blank' && 
          typeof fancybox == 'undefined' && 
          url && 
          url.indexOf('#') === -1 && 
          url.indexOf('tel:') === -1 && 
          url.indexOf('mailto:') === -1) {
        
          e.preventDefault();
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);
      }
    });
    
    // STICKY MENU
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $('.navbar').addClass('sticky')
      } else{
          $('.navbar').removeClass('sticky')
      }
    });

  });
  // END DOCUMENT READY

  // DATA BACKGROUND IMAGE (TYLKO OBRAZKI)
  var pageSectionImg = $("[data-background]");
  pageSectionImg.each(function (indx) {
      if ($(this).attr("data-background")) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });

// WOW ANIMATION - ZOPTYMALIZOWANY DLA REDUKCJI CLS
if (typeof WOW !== 'undefined') {
  var wow = new WOW({
    animateClass: 'animated',
    offset: 0,
    mobile: false,        // Wyłącz animacje na mobile (lepszy CLS)
    live: false,          // Wyłącz ciągłe sprawdzanie DOM (lepsza wydajność)
    resetAnimation: false // Nie resetuj animacji przy scrollu
  });
  wow.init();
  
  // Dodatkowa optymalizacja - usuń will-change po zakończeniu animacji
  document.addEventListener('DOMContentLoaded', function() {
    var animatedElements = document.querySelectorAll('.wow');
    
    animatedElements.forEach(function(element) {
      element.addEventListener('animationend', function() {
        this.style.willChange = 'auto';
      });
    });
  });
}
  
  // --- GŁÓWNY SLIDER (MAIN SLIDER) ---
  // Uruchamia się dla wszystkich urządzeń
  function initMainSwiper() {
    if (typeof Swiper !== 'undefined') {
      var mainSlider = new Swiper('.main-slider', {
        lazy: true,
        preloadImages: false,
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    } else {
      setTimeout(initMainSwiper, 100); // Ponów próbę
    }
  }
  initMainSwiper(); // Uruchom slider
  
  // CAROUSEL CLASSES SLIDER
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper('.carousel-classes', {
      slidesPerView: '4',
      spaceBetween: 30,
      loop: 'true',
      draggable: 'true',
      navigation: {
        prevEl: '.button-prev1',
        nextEl: '.button-next1',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }
    });
  }

  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      if(parent_section_postion) { // Zabezpieczenie
        var parent_section_top = parent_section_postion.top;
        if ($(document).scrollTop() > parent_section_top - 300) {
          if ($(this).data('status') == 'yes') {
            $(this).html($(this).data('count'));
            $(this).data('status', 'no');
          }
        }
      }
    });
  });

  // Preloader
  const fadeout = () => {
    const LoaderWrapper = document.querySelector('.loadwraps');
    if (LoaderWrapper) {
        LoaderWrapper.classList.add('fade12');
    }
  }
  window.addEventListener('load', fadeout);

})(jQuery); // <-- POPRAWNE ZAMKNIĘCIE BLOKU JQUERY


// --- SEKCJA SKRYPTÓW POZA JQUERY ---

// ACCORDION
let question = document.querySelectorAll(".question");
question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
});