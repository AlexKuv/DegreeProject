const carouselPhoto =  () =>{
  //style
  const style = document.createElement("style");
  style.id = "gallery-style";
  style.textContent = "\n    \n       .photo-gallery-images {\n        display: none;\n    }\n\n    .photo-gallery-slider {\n      height: 400px;\n    }\n\n      .photo-gallery-image-active {\n      display: flex;\n      width: 700px !important;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin-left: auto;\n      margin-right: auto;        \n    }\n\n        .photo-gallery-wrapper {\n        position: relative;\n        display: flex;\n    } \n\n        .photo-gallery-wrapper > span {\n        z-index: 9999 !important;\n        position: absolute;\n        width: 36px;\n        height: 37px;\n        background-color: #f4c71b !important;\n        border-radius: 50%;\n        text-align: center;\n        padding-top: 11px;\n    }\n\n    .photo-gallery-left {\n        display: block;\n        top: 40%;\n        left: 6.5%;\n        cursor: pointer;\n    }\n\n    .photo-gallery-right {\n        display: blockl;\n        top: 40%;\n        left: 89%;\n        cursor: pointer;\n    }\n\n    .photo-gallery-buttons {\n      position: absolute;\n      top: 90%;\n      left: 0;\n      right: 0;\n      margin-left: auto;\n      margin-right: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .photo-gallery-dots {\n        min-height: 10px;\n        min-width: 30px;\n        border-radius: 10%;\n        margin: 1px;\n        border: 1px solid rgba(204, 204, 204, 0.911);\n    }\n\n\n    .photo-gallery-dot-active {\n        background: #f4c71b;\n        border: 1px solid #f4c71b;\n    }\n\n\n    \n    @media (max-width: 768px) {\n\n        .photo-gallery-slider {\n      height: auto;\n    }\n\n      .photo-gallery-image-active {\n      display: flex;\n      width: 700px !important;\n      position: static;\n      left: 0;\n      right: 0;\n      margin-left: auto;\n      margin-right: auto;        \n    }\n\n      \n\n    .photo-gallery-left {\n        display: none;\n    }\n\n    .photo-gallery-right {\n        display: none;\n    }\n    \n}\n\n    ";
  document.head.append(style);
  const galleryBg = document.querySelector(".gallery-bg > .wrapper"),
      gallerySlider = document.querySelector(".gallery-slider"),
      images = document.querySelectorAll(" .gallery-slider > .slide > img"),
      leftArrow = document.createElement("span"),
      rightArrow = document.createElement("span"),
      buttonsWrapper = document.createElement("div");
  galleryBg.classList.add("photo-gallery-wrapper");
  gallerySlider.classList.add("photo-gallery-slider");
  buttonsWrapper.classList.add("photo-gallery-buttons");
  leftArrow.className = "photo-gallery-left";
  leftArrow.innerHTML = "<i class=\"fa fa-angle-left\"></i>";
  rightArrow.className = "photo-gallery-right";
  rightArrow.innerHTML = "<i class=\"fa fa-angle-right\"></i>";
  galleryBg.append(leftArrow);
  galleryBg.append(rightArrow);
  galleryBg.append(buttonsWrapper);
  images.forEach( (x) => {
    if (x === images[0]) {
      x.classList.add("photo-gallery-image-active");
    }

    x.classList.add("photo-gallery-images");
  });

  for (let i = 0; i < images.length; i++) {
    const newDot = document.createElement("button");
    newDot.classList.add("photo-gallery-dots");

    if (i === 0) {
      newDot.classList.add("photo-gallery-dot-active");
    }

    buttonsWrapper.append(newDot);
  }

  const sliderDots = document.querySelectorAll(".photo-gallery-dots");

  const prevSlide =  ()  =>{
    for (let _i = 0; _i < images.length; _i++) {
      if (images[0].classList.contains("photo-gallery-image-active")) {
        images[0].classList.remove("photo-gallery-image-active");
        images[0].classList.add("photo-gallery-images");
        images[images.length - 1].classList.add("photo-gallery-image-active");
        sliderDots[0].classList.remove("photo-gallery-dot-active");
        sliderDots[images.length - 1].classList.add("photo-gallery-dot-active");
        return;
      }

      if (images[_i].classList.contains("photo-gallery-image-active")) {
        images[_i].classList.remove("photo-gallery-image-active");

        images[_i - 1].classList.add("photo-gallery-image-active");

        sliderDots[_i].classList.remove("photo-gallery-dot-active");

        sliderDots[_i - 1].classList.add("photo-gallery-dot-active");

        return;
      }
    }
  };

  const nextSlide = () => {
    for (let _i2 = 0; _i2 < images.length; _i2++) {
      if (images[images.length - 1].classList.contains("photo-gallery-image-active")) {
        images[images.length - 1].classList.add("photo-gallery-images");
        images[0].classList.add("photo-gallery-image-active");
        sliderDots[0].classList.add("photo-gallery-dot-active");
        images[images.length - 1].classList.remove("photo-gallery-image-active");
        sliderDots[images.length - 1].classList.remove("photo-gallery-dot-active");
        return;
      }

      if (images[_i2].classList.contains("photo-gallery-image-active")) {
        images[_i2].classList.add("photo-gallery-images");

        images[_i2 + 1].classList.add("photo-gallery-image-active");

        sliderDots[_i2 + 1].classList.add("photo-gallery-dot-active");

        sliderDots[_i2].classList.remove("photo-gallery-dot-active");

        images[_i2].classList.remove("photo-gallery-image-active");

        return;
      }
    }
  };

  galleryBg.addEventListener("click",  (event) => {
    let target = event.target; //!left

    if (target.closest(".photo-gallery-left")) {
      prevSlide();
    } //!right


    if (target.closest(".photo-gallery-right")) {
      nextSlide();
    } //!btn


    if (target.closest(".photo-gallery-dots")) {
      for (var _i3 = 0; _i3 < images.length; _i3++) {
        if (sliderDots[_i3] === target) {
          images.forEach(function (elem) {
            return elem.classList.remove("photo-gallery-image-active");
          });
          sliderDots.forEach(function (elem) {
            return elem.classList.remove("photo-gallery-dot-active");
          });

          images[_i3].classList.add("photo-gallery-image-active");

          sliderDots[_i3].classList.add("photo-gallery-dot-active");
        }
      }
    }
  });
  let interval;
  interval = setInterval(nextSlide, 3000);
  galleryBg.addEventListener("mouseover", function (event) {
    if (event.target.matches(".photo-gallery-left") || event.target.matches(".photo-gallery-right") || event.target.matches(".photo-gallery-dots")) {
      clearInterval(interval);
    }
  });
  galleryBg.addEventListener("mouseout", function (event) {
    if (event.target.matches(".photo-gallery-left") || event.target.matches(".photo-gallery-right") || event.target.matches(".photo-gallery-dots")) {
      interval = setInterval(nextSlide, 3000);
    }
  });
};

export default carouselPhoto;