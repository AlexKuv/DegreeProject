const slider = function (){
  const section = document.getElementById('gallery');
  const wrapper = document.querySelector('.gallery-bg>.wrapper'),
  slider = document.querySelector('.gallery-slider'),
  slide = slider.querySelectorAll('.slide');
  let currentSlide = 0, //номер слайда
  interval;

  //доюавление класса для слайдера
  const addCarouselClass = function() {
    wrapper.classList.add('carousel-slider-photo');
    slider.classList.add('carousel-slider__wrap-photo');
   slide[0].classList.add('carousel-slider__item-photo-active');

    slide.forEach(item => {
      item.classList.add('carousel-slider__item-photo');
    });

  };
addCarouselClass();

  const addStyle =function ()  {
    let style = document.getElementById('sliderCarousel-style-photo');
    if(!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style-photo';
    }
let a = document.querySelector('.gallery-bg');
    a.style.cssText = `
        height: 490px;
    padding: 100px;
    `;

    //     .carousel-slider-photo {
    //   overflow: hidden;
    // }
    style.textContent = `
    .carousel-slider-photo {
    margin-top: 150px;
    margin-bottom: 150px;
     }
    .carousel-slider__wrap-photo {
      display: flex !important;
      transition: transform 0.5s !important;
      will-change: transform !important;
    }
    .carousel-slider__item-photo {
      flex: 0 0 100% !important;
      position:absolute;
      left:50%;
      -webkit-transform:translate(-50%,-50%);
      transform:translate(-50%,-50%);
      width:100%;
      opacity:0;
      -webkit-transition:opacity .5s;
      transition:opacity .5s
    }
    .carousel-slider__item-photo-active {
      opacity:1;
      -webkit-transition:opacity .5s;
      transition:opacity .5s
    }
    `;
    document.head.appendChild(style);
  };
addStyle();

const addArrow = function() {
   let prev = document.createElement('button');
  let next = document.createElement('button');

  prev.className = 'carousel-slider_prev';
  next.className = 'carousel-slider_next';

  let arrowDiv = document.createElement('div');
  arrowDiv.className = 'arrow-div-phone';
  wrapper.append(arrowDiv);


  arrowDiv.append(prev);
  arrowDiv.append(next);


  const style = document.createElement('style');
  style.textContent = `
  .carousel-slider_prev {
    background: url(../images/arrow-left.png) center no-repeat;
  max-height: 25px;
  padding:15px;
  wight: 25px;
  border-radius: 25px;
  background-color: yellow;
  border:none;
  z-index:1;
  }
  .carousel-slider_next {
  background: url(../images/arrow-right.png) center no-repeat;
  max-height: 25px;
  padding:15px;
  wight: 25px;
  border-radius: 25px;
  background-color: yellow;
  border:none;
  z-index:1;
  margin-left:2%;
  }
  .arrow-div-phone {
    display: flex;
    justify-content: space-between;
    max-width: 79%;
    margin-left: 10%;
  }
  `;
  document.head.appendChild(style);
};

addArrow();
//   //добавление точек с классом dot
//   const dotAdd = () => {
//     let dotUl = document.createElement('ul'),
//     dotLi = document.createElement('li');
//     dotUl.className = 'gallery-dots';
//     console.log('dotUl: ', dotUl);
//     wrapper.append(dotUl);
//     dotLi.className = 'dot';

//     for (let i = 0; i<slide.length; i++){
//       dotUl.appendChild(dotLi.cloneNode());
//     }
//      let firstLi = dotUl.querySelectorAll('.dot');
//     firstLi[currentSlide].classList.add('dot-active');
//   };
// dotAdd();


  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    let dot = document.querySelectorAll('.dot');

    prevSlide(slide, currentSlide, 'carousel-slider__item-photo-active');
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'carousel-slider__item-photo-active');
  };

  const startSlide = (time = 3000) => {
   interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };
startSlide();

section.addEventListener('click', (event) => {
  event.preventDefault();
  let target = event.target;
  let next = document.querySelector('.carousel-slider_next');
  let prev = document.querySelector('.carousel-slider_prev');


   prevSlide(slide, currentSlide, 'carousel-slider__item-photo-active');

  if(target.matches('.carousel-slider_next')){
    currentSlide++;
  }else if(target.matches('.carousel-slider_prev')){
    currentSlide--;
  }


  if(currentSlide >= slide.length){
    currentSlide = 0;
  }
  if (currentSlide < 0){
    currentSlide = slide.length -1;
  }

   nextSlide(slide, currentSlide, 'carousel-slider__item-photo-active');
});

};
 export default slider;