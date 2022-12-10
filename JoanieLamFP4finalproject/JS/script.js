// Javascript for responsive navigation menu
const menuBtn = document.querySelector(".menu");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    
//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

//Javacript for image slider navigation
const Imgbtns = document.querySelectorAll(".manual-btn");
const Imgslides = document.querySelectorAll(".img-slide");

var ImgsliderNav = function(manual){
  Imgbtns.forEach((Imgbtn) => {
    Imgbtn.classList.remove("active");
  });

  Imgslides.forEach((Imgslide) => {
    Imgslide.classList.remove("active");
  });

  Imgbtns[manual].classList.add("active");
  Imgslides[manual].classList.add("active");
}

Imgbtns.forEach((Imgbtn, i) => {
  Imgbtn.addEventListener("click", () => {
    ImgsliderNav(i);
  });
});
// Js for pop up

