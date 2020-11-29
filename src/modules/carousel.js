const carousel = function carousel() {
  //style
  const style = document.createElement("style");
  style.id = "carousel-style";
  style.textContent = "\n    .services-slider {\n      width: 100%;\n      overflow: hidden;\n      padding-left: 5px;\n      position: relative;\n    }\n\n    .services-slider > .slide {   \n      min-width: 226px;    \n      margin-right: 0% !important; \n      margin-left: 0%!important;\n      transition: transform 0.5s !important;\n      will-change: transform !important;\n    }\n\n    .services-slider > span {\n      position: absolute;\n      width: 36px;\n      height: 37px;\n      background-color: #f4c71b !important;\n      border-radius: 50%;\n      text-align: center;\n      padding-top: 11px;\n    }\n\n    .carousel-slider-left {\n      top: 22%;\n      left: 0;\n      cursor: pointer;\n    }\n\n    .carousel-slider-right {\n      top: 22%;\n      left: 97%;\n      cursor: pointer;\n    }\n\n    @media (max-width: 1100px) {\n\n    .services-slider {\n      width: 95%;\n    }\n\n    .services-slider > .slide {\n      flex: 0 0 34%;   \n\n    }\n  }\n\n    @media (max-width: 768px) {\n\n    .services-slider {\n      width: 90%;\n    }\n\n    .services-slider > .slide {\n      flex: 0 0 100%;   \n    }\n\n    .carousel-slider-left {\n      top: 22;\n      left: 3%;\n      cursor: pointer;\n    }\n\n    .carousel-slider-right {\n      top: 22%;\n      left: 80%;\n      cursor: pointer;\n    }\n  }\n\n    @media (max-width: 330px) {\n\n    .carousel-slider-left {\n      left: 3%;\n    }\n  \n    .carousel-slider-right {\n      left: 80%;\n    }\n  }\n\n    @media (max-width: 380px) {\n\n    .carousel-slider-left {\n      left: 6%;\n    }\n  \n    .carousel-slider-right {\n      left: 80%;\n    }\n  }\n    ";
  document.head.append(style); //module-body

  const slider = document.querySelector(".services-slider"),
      slides = slider.querySelectorAll('.slide'),
      images = document.querySelectorAll(" .services-slider > .slide > img"),
      leftArrow = document.createElement("span"),
      rightArrow = document.createElement("span");

  leftArrow.className = "carousel-slider-left";
  leftArrow.innerHTML = "<i class=\"fa fa-angle-left\"></i>";
  rightArrow.className = "carousel-slider-right";
  rightArrow.innerHTML = "<i class=\"fa fa-angle-right\"></i>";
  slider.append(leftArrow);
  slider.append(rightArrow);

  const menu = function menu() {
    let mover = 0,
        position = 0;
    slider.addEventListener("click", function (event) {
      let target = event.target;
      if (!target.closest(".carousel-slider-left, .carousel-slider-right")) {
        return;
      }

      if (target.closest(".carousel-slider-left") && position > 0) {
        if (window.innerWidth <= 768) {
          mover += slides[0].getBoundingClientRect().width - images[0].getBoundingClientRect().width + images[0].getBoundingClientRect().width;
          position--;
          slides.forEach(function (x) {
            x.style.transform = "translateX(".concat(mover, "px)");
          });
          return;
        }

        if (window.innerWidth < 1100) {
          mover += slides[0].getBoundingClientRect().width;
          position--;
          slides.forEach(function (x) {
            x.style.transform = "translateX(".concat(mover, "px)");
          });
          return;
        }

        if (window.innerWidth > 1100) {
          mover += 226;
          position--;
          slides.forEach(function (x) {
            x.style.transform = "translateX(".concat(mover, "px)");
          });
          return;
        }
        if(target.closest(".carousel-slider-left") && position < 0) {
          
        }
      }

  if (target.closest(".carousel-slider-right")) {
      if (window.innerWidth <= 768 && position !== slides.length - 1) {
      mover -= slides[0].getBoundingClientRect().width - images[0].getBoundingClientRect().width + images[0].getBoundingClientRect().width;
      position++;
      slides.forEach(function (x) {
      x.style.transform = "translateX(".concat(mover, "px)");
      });
      return;
      }

        if (window.innerWidth > 768 && window.innerWidth <= 1100 && position !== slides.length - 3) {
          mover -= slides[0].getBoundingClientRect().width;
          position++;
          slides.forEach(function (x) {
            x.style.transform = "translateX(".concat(mover, "px)");
          });
          return;
        }

        if (window.innerWidth > 1100 && position !== slides.length - 5) {
          mover -= 226;
          position++;
          slides.forEach(function (x) {
            x.style.transform = "translateX(".concat(mover, "px)");
          });
          return;
        }
      }
    });
  };

  menu();
  window.addEventListener("resize", menu);
};

export default carousel;
