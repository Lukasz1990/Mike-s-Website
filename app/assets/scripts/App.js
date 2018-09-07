import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImage = document.querySelector(".image");

function checkSlide() {
  // half way through the image
  const slideInAt =
    window.scrollY + window.innerHeight - sliderImage.height / 2;
  // bottom of the image
  const imageBottom = sliderImage.offsetTop + sliderImage.height;
  const isHalfShown = slideInAt > sliderImage.offsetTop;
  const isNotScrolledPast = window.scrollY < imageBottom;
  if (isHalfShown && isNotScrolledPast) {
    sliderImage.classList.add("animation");
  } else {
    sliderImage.classList.remove("animation");
  }
}

window.addEventListener("scroll", debounce(checkSlide));

//NAV
const sidenav = document.querySelectorAll(".sidenav");
const navbar = document.querySelector(".navbar-fixed");
M.Sidenav.init(sidenav, {});
function scroll() {
  if (window.scrollY >= 130) {
    navbar.classList.add("scroll_nav");
  } else {
    navbar.classList.remove("scroll_nav");
  }
}

window.addEventListener("scroll", scroll);
//NAV
//SLIDER//
var slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 400,
  transition: 500,
  interval: 5000
});
//SLIDER//

const sliderImages = document.querySelectorAll(".slide_down");

$(".open_menu").click(function() {
  $(".navbar").toggleClass("navbar_open");
  $(".open_menu").toggleClass("open");
});

function scrollpls() {
  const navbar = document.getElementById("header");
  if (window.scrollY >= 183) {
    navbar.classList.add("scroll_nav");
  } else {
    navbar.classList.remove("scroll_nav");
  }
}

window.addEventListener("scroll", scrollpls);
//ANIME IMG //

//ANIME IMG //
//IMAGE GALLERY
const current = document.querySelector("#current-img");
const images = document.querySelectorAll(".my-work__gallery__img img");

const opacity = 0.4;

images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  images.forEach(img => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add("fade-in");

  setTimeout(() => current.classList.remove("fade-in"), 1000);

  e.target.style.opacity = opacity;
}

//IMAGE GALLERY
