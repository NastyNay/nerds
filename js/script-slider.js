var openslide1 = document.querySelector(".slider-radio-button-1");
var openslide2 = document.querySelector(".slider-radio-button-2");
var openslide3 = document.querySelector(".slider-radio-button-3");
var slide1 = document.querySelector (".slide1");
var slide2 = document.querySelector (".slide2");
var slide3 = document.querySelector (".slide3");

openslide1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide2.classList.add("hide-slide-js");
    slide3.classList.add("hide-slide-js");
    slide2.classList.remove("show-slide-js");
    slide3.classList.remove("show-slide-js");
    slide1.classList.add("show-slide-js");
    openslide1.classList.add("slider-radio-button-active")
    openslide2.classList.remove("slider-radio-button-active")
    openslide3.classList.remove("slider-radio-button-active")

  });

  openslide2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("hide-slide-js");
    slide3.classList.add("hide-slide-js");
    slide1.classList.remove("show-slide-js");
    slide3.classList.remove("show-slide-js");
    slide2.classList.add("show-slide-js");
    openslide2.classList.add("slider-radio-button-active")
    openslide1.classList.remove("slider-radio-button-active")
    openslide3.classList.remove("slider-radio-button-active")
  });

  openslide3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("hide-slide-js");
    slide2.classList.add("hide-slide-js");
    slide1.classList.remove("show-slide-js");
    slide2.classList.remove("show-slide-js");
    slide3.classList.add("show-slide-js");
    openslide3.classList.add("slider-radio-button-active")
    openslide1.classList.remove("slider-radio-button-active")
    openslide2.classList.remove("slider-radio-button-active")
  });