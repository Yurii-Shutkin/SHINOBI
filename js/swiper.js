const resultsSwiper = new Swiper('.results__swiper', {
    centeredSlides: true,
    slidesPerView: 1.3,
    spaceBetween: 0,
    watchSlidesProgress: true,
    loop: true,
    grabCursor: true,
    
    on: {
    progress(swiper) {
      for (let i = 0; i < swiper.slides.length; i++) {
        const slide = swiper.slides[i];
        const progress = slide.progress;

        // масштабирование
        const scale = 1 - Math.abs(progress) * 0.2;
        slide.style.transform = `scale(${scale})`;

        // лёгкое затемнение боковых
        slide.style.opacity = 1 - Math.abs(progress) * 0.4;
      }
    },
    setTransition(swiper, speed) {
      swiper.slides.forEach((slide) => {
        slide.style.transition = `${speed}ms`;
      });
    }
  },

  breakpoints: {
        768: {
          slidesPerView: 2.3,
        },
      },
});