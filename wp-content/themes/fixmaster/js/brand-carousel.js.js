/**
 * Brand Carousel Swiper Initialization
 * SmartFixAGD - Brands Slider
 */

document.addEventListener('DOMContentLoaded', function() {
    // Sprawdź czy element istnieje
    const brandCarouselElement = document.querySelector('.brand-carousel');
    
    if (brandCarouselElement) {
        // Inicjalizacja Swiper dla karuzeli brandów
        const brandSwiper = new Swiper('.brand-carousel', {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 600,
            grabCursor: true,
            breakpoints: {
                // Mobile
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                // Tablet
                576: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                // Desktop small
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                // Desktop medium
                992: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                // Desktop large
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                }
            },
            // Opcjonalnie: obsługa błędów
            on: {
                init: function () {
                    console.log('Brand carousel initialized');
                },
            }
        });
    }
});