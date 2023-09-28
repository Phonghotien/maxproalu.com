export default function BtnToTopModule() {
  const btnToTop = document.querySelector(".backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });
  if (btnToTop) {
    btnToTop.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  $(document).ready(function () {
    if (window.scrollY > 10) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });
  const tgLang = $(".btnLang");
  if (tgLang) {
    tgLang.on("click", function () {
      $(this).next().slideToggle(500);
      $(this).toggleClass("active");
    });
    $(document).mouseup(function (e) {
      if (!tgLang.is(e.target) && tgLang.has(e.target).length === 0) {
        tgLang.next().slideUp(500);
        $(tgLang).removeClass("active");
      }
    });
  }
}
