export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);

    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
        }
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          ...customizeOption,
        });
      });
    }
  }
  functionSlider(".blogrl-sw", {
    speed: 1200,
    autoplay: false,
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
    slidesPerView: "auto",
  });
  functionSlider(".hcus-sw", {
    speed: 1200,
    autoplay: false,
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    effect: "slide",
    slidesPerView: "auto",
  });
  functionSlider(".prds-sw", {
    speed: 1200,
    autoplay: true,
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    effect: "slide",
    slidesPerView: "auto",
  });
  functionSlider(".hif-sw", {
    speed: 1200,
    autoplay: true,
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "fade",
    slidesPerView: "auto",
  });
  // functionSlider(".bnh-sw", {
  //   speed: 1200,
  //   // autoplay: {
  //   //   delay: 3000,
  //   //   disableOnInteraction: false,
  //   // },
  //   // slidesPerGroup: 2,
  //   initialSlide: 0,
  //   centeredSlides: false,
  //   loop: false,
  //   spaceBetween: 0,
  //   effect: "fade",
  //   slidesPerView: "auto",
  //   pagination: {
  //     el: ".bnh-pagination",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return (
  //         '<span class="' +
  //         className +
  //         '"> <span class="pagi-num">' +
  //         (index < 9 ? 0 : "") +
  //         "" +
  //         (index + 1) +
  //         '</span><span class="pagi-pro"></span></span>'
  //       );
  //     },
  //   },
  // });
  const home_silder = document.querySelectorAll(".prj-slider");
  if (home_silder) {
    home_silder.forEach((item, i) => {
      const swiperMain = item.querySelector(".prj-main .swiper");
      const swiperThumb = item.querySelector(".prj-thumb .swiper");
      const slideThumb = item.querySelectorAll(".prj-thumb .swiper-slide");
      const slideMain = item.querySelectorAll(".prj-main .swiper-slide");
      let autoPlayDelay = 3500;

      const itemText = new Swiper(swiperThumb, {
        speed: 1200,
        watchOverflow: true,
        watchSlidesVisibility: true,
        grabCursor: true,
        loop: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
      });
      const itemMain = new Swiper(swiperMain, {
        speed: 1200,
        slidesPerView: 1,
        loop: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: itemText,
        },
      });
    });
  }
  const htab_silder = document.querySelectorAll(".htab-slider");
  if (htab_silder) {
    htab_silder.forEach((item, i) => {
      const swiperMain = item.querySelector(".htab-main-sw .swiper");
      const swiperThumb = item.querySelector(".htab-head-thumb .swiper");
      const slideThumb = item.querySelectorAll(
        ".htab-head-thumb .swiper-slide"
      );
      const slideMain = item.querySelectorAll(".htab-main-sw .swiper-slide");
      let autoPlayDelay = 3500;

      const itemText = new Swiper(swiperThumb, {
        speed: 1200,
        watchOverflow: true,
        watchSlidesVisibility: true,
        grabCursor: true,
        loop: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        // autoHeight: true,
      });
      const itemMain = new Swiper(swiperMain, {
        speed: 1200,
        autoHeight: true,
        slidesPerView: 1,
        loop: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: itemText,
        },
      });
      // itemText.controller.control = itemMain;
      // itemMain.controller.control = itemText;
    });
  }
  const hbn_silder = document.querySelectorAll(".bnh-slider");
  if (hbn_silder) {
    hbn_silder.forEach((item, i) => {
      const swiperMain = item.querySelector(".bnh-sw-main .swiper");
      const swiperThumb = item.querySelector(".bnh-thumb-sw .swiper");
      const slideThumb = item.querySelectorAll(".bnh-thumb-sw .swiper-slide");
      const slideMain = item.querySelectorAll(".bnh-sw-main .swiper-slide");
      let autoPlayDelay = 3500;

      const itemText = new Swiper(swiperThumb, {
        speed: 1200,
        loop: false,
        slidesPerView: "auto",
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".bnh-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"> <span class="pagi-num">' +
              (index < 9 ? 0 : "") +
              "" +
              (index + 1) +
              '</span><span class="pagi-pro"></span></span>'
            );
          },
        },
      });
      const itemMain = new Swiper(swiperMain, {
        speed: 1200,
        slidesPerView: 1,
        loop: false,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: itemText,
        },
      });
    });
  }
}
