console.log('running');
const lottieSwiper = new Swiper(".lottie-swiper", {
    // Optional parameters
    direction: "vertical",
    loop: false,
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 1,
    mousewheel: true,
    speed: 2000,
    effect: "slide",
    slideEffect: {
      easing: "easeOutQuart",
    },
});