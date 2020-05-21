var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/*svg4everybody();
var navMain = document.querySelector(".main-nav"),
  navToggle = document.querySelector(".main-nav__toggle");

if (navMain.classList.remove("main-nav--nojs"),
  navToggle.addEventListener("click", function () {
    navMain.classList.contains("main-nav--closed") ?
      (navMain.classList.remove("main-nav--closed"),
        navMain.classList.add("main-nav--opened")) : (navMain.classList.add("main-nav--closed"),
          navMain.classList.remove("main-nav--opened"))
  }),
  "null" != document.querySelector(".page-main")) {
  var slideImageList = document.querySelector(".slide-image__list"),
    slideImage = slideImageList.querySelectorAll(".slide-image__image"),
    slideItem = document.querySelectorAll(".slide-image__item"),
    slider = document.querySelector(".slide-image__toggle"),
    item = slider.querySelector(".slide-image__toggle-btn"),
    itemBefore = document.querySelector(".slide-image__before"),
    itemAfter = document.querySelector(".slide-image__after"),
    sliderClientCoords = slider.getBoundingClientRect(),
    sliderCoords = {};
  sliderCoords.top = sliderClientCoords.top + pageYOffset,
    sliderCoords.left = sliderClientCoords.left + pageXOffset,
    item.onmousedown = function (e) {
      item.ondragstart = function () {
        return !1
      };
      var t = item.getBoundingClientRect(), i = {};
      i.top = t.top + pageYOffset, i.left = t.left + pageXOffset;
      var l = slider.offsetWidth - item.offsetWidth, s = e.pageX - i.left;
      return document.onmousemove = function (e) {
        var t = e.pageX - sliderCoords.left - s;
        if (t < 0 && (t = 0), l < t && (t = l), item.style.left = t + "px",
          window.matchMedia("(min-width: 768px) and (max-width: 1299px)").matches) var i = t / 660 * 100;
        if (window.matchMedia("(min-width: 1300px)").matches) i = t / 392 * 100;
        slideImage[0].style.clipPath = "polygon(0% 0%, " + i + "% 0%, " + i + "% 100%, 0% 100%)",
          slideImage[1].style.clipPath = "polygon(" + i + "% 0%, 100% 0%, 100% 100%, " + i + "% 100%)"
      },
        !(document.onmouseup = function () { document.onmousemove = document.onmouseup = null })
    },
    itemBefore.addEventListener("click", function (e) {
      e.preventDefault(), slideImage[0].style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        slideImage[1].style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        slideItem[0].style.display = "block",
        slideItem[1].style.display = "none",
        slideImage[0].style.clip = "auto",
        slideImage[1].style.clip = "auto",
        item.style.left = "5px", item.style.right = "auto"
    }),
    itemAfter.addEventListener("click", function (e) {
      e.preventDefault(), slideImage[0].style.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        slideImage[1].style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        slideItem[0].style.display = "none",
        slideItem[1].style.display = "block", slideImage[0].style.clip = "auto",
        slideImage[1].style.clip = "auto", item.style.left = "auto", item.style.right = "5px"
    })
}*/
