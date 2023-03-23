let toggle = document.getElementById("toggle");
let togglemenu = document.querySelector(".toggle-menu");
let li = document.querySelectorAll(".li-item");
let mark = true;
toggle.addEventListener("click", function () {
  if (mark) {
    togglemenu.style.left = 0;
    mark = false;
  } else {
    togglemenu.style.left = "-100%";
    mark = true;
  }
});
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    togglemenu.style.left = "-100%";
  });
}

// carousel slider
const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const prevBtn = carousel.querySelector(".carousel-control-prev");
const nextBtn = carousel.querySelector(".carousel-control-next");
let currentIndex = 0;

function goToSlide(index) {
  carouselItems[currentIndex].classList.remove("active");
  carouselItems[index].classList.add("active");
  currentIndex = index;
}
let interval = setInterval(() => {
  let index = currentIndex - 1;
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }
  goToSlide(index);
}, 4000);

prevBtn.addEventListener("click", (e) => {
  clearInterval(interval);
  e.preventDefault();
  let index = currentIndex - 1;
  if (index < 0) {
    index = carouselItems.length - 1;
  }
  goToSlide(index);
});

nextBtn.addEventListener("click", (e) => {
  clearInterval(interval);
  e.preventDefault();
  let index = currentIndex + 1;
  if (index >= carouselItems.length) {
    index = 0;
  }
  goToSlide(index);
});

$(document).ready(function () {
  $(".carousel1").owlCarousel({
    margin: 50,
    loop: true,
    nav: true,
    autoplay: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#caro_2 .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    rtl:true,
    navText: [
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
