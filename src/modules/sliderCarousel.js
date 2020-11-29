'use strict';
class SliderCarousel {
  constructor({
    main,
    wrap, 
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 5,
    responsive = []
    }){
    this.main = document.querySelector(main);
    this.wrap = this.main.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow)
    };
    this.responsive = responsive;
  }


//доюавление класса для слайдера
  addCarouselClass() {
    this.main.classList.add('carousel-slider');
    this.wrap.classList.add('carousel-slider__wrap');
    for (const item of this.slides){
      item.classList.add('carousel-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if(!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
 
    style.textContent = `
    .carousel-slider {
      overflow: hidden !important;
      position: relative;
    }
    .carousel-slider__wrap {
      display: flex !important;
      transition: transform 0.5s !important;
      will-change: transform !important;
    }
    .carousel-slider__item {
      flex: 0 0 ${this.options.widthSlide}% !important;
      margin: auto 0;
    }
    `;
    document.head.appendChild(style);
  }

prevSlider() {
  if(this.options.infinity || this.options.position > 0){
  --this.options.position;
  
  if(this.options.position < 0 ){
    this.options.position = this.slides.length - this.slidesToShow;
  }
  this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
  }
}

nextSlider() {
if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
     ++this.options.position;
     if( this.options.position > this.slides.length - this.slidesToShow) {
       this.options.position = 0;
     }
    this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
  }
   
}

addArrow() {
  this.prev = document.createElement('button');
  this.next = document.createElement('button');

  this.prev.className = 'carousel-slider_prev';
  this.next.className = 'carousel-slider_next';

  let arrowDiv = document.createElement('div');
  arrowDiv.className = 'arrow-div';
  this.main.append(arrowDiv);


  arrowDiv.append(this.prev);
  arrowDiv.append(this.next);


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
  .arrow-div {
    display: flex;
    justify-content: center;
    margin-left:1%;
  }
  `;
  document.head.appendChild(style);
}

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this) );
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  responseInit() {
    const sliderDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint); 
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if(widthWindow <maxResponse){
        for (let i = 0; i < allResponse.length; i++){
          if(widthWindow < allResponse[i]) {
          this.slidesToShow = this.responsive[i].sliderToShow;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
          }
        }
      }
    };
    checkResponse();

    window.addEventListener('resize', checkResponse);
  }
  


  init() {
    this.addCarouselClass();
    this.addStyle();

    if (this.prev && this.next){
      this.controlSlider();
    }else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {
    this.responseInit();
    }
  }
}

export default SliderCarousel;