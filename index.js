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

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prevclicked")
  let index = currentIndex - 1;
  if (index < 0) {
    index = carouselItems.length - 1;
  }
  goToSlide(index);
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("nextClicked")
  let index = currentIndex + 1;
  if (index >= carouselItems.length) {
    index = 0;
  }
  goToSlide(index);
});

let followContainer = document.querySelector(".follow-container");
let  width = followContainer.clientWidth;
function leftScroll(){
      followContainer.scrollLeft = followContainer.scrollLeft - 200;
}
function rightScroll(){
      followContainer.scrollLeft = followContainer.scrollLeft + 200;
}