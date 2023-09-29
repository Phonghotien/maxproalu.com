export default function hModule() {
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

    functionSlider(".news-nb-slider", {
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


    functionSlider(".news-sp-slider", {
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
}