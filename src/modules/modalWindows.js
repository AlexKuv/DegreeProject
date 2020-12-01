const modalWindows = () => {
  const freeVisitForm = document.getElementById("free_visit_form"),
      callbackForm = document.getElementById("callback_form"),
      thanks = document.getElementById("thanks"),
      gift = document.getElementById("gift"),
      formContentCallback = document.querySelector('.form-content-callback'),
      formContentGift = document.querySelector('.form-content-gift'),
      formContentVisit = document.querySelector('.form-content-visit');
      let giftImg = document.querySelector('.fixed-gift');
  document.addEventListener("click", function (event) {
    let target = event.target;

    if (target.closest(".free-visit")) {
      freeVisitForm.style.display = "block";
      formContentVisit.style.opacity = "0";
      var x = 0;
      var timer = setInterval(function () {
        x += 0.1;
        formContentVisit.style.opacity = "".concat(x);

        if (formContentVisit.style.opacity === "1.1") {
          clearInterval(timer);
        }
      }, 20);
    }

    if (target.closest(".right > .call > .callback-btn")) {
      callbackForm.style.display = "block";
      formContentCallback.style.opacity = "0";
      let _x = 0;

      let _timer = setInterval(function () {
        _x += 0.1;
        formContentCallback.style.opacity = "".concat(_x);

        if (formContentCallback.style.opacity === "1.1") {
          clearInterval(_timer);
        }
      }, 20);
    }

    if (target.closest(".fixed-gift")) {
      
      giftImg.style.display = "none";
      gift.style.display = "block";
    }

    if (target.closest("#gift > .overlay, #gift > .form-wrapper > .close-form .close_icon, #gift > .form-wrapper > .form-content > .close-btn")) {
      gift.style.display = "none";
      giftImg.style.display = "block";
     // document.querySelector(".fixed-gift").remove();
    }

    if (target.closest(".overlay, .close_icon,  #thanks > .form-wrapper > .form-content > .close-btn")) {
      freeVisitForm.style.display = "none";
      callbackForm.style.display = "none";
      thanks.style.display = "none";
    }
  });
};

export default modalWindows;