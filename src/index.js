'use strict';

import chooseClub from './modules/chooseClub';
import freeVisit from './modules/freeVisit';
import callBackModal from './modules/callBackModal';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import present from './modules/present';
import sliderCarousel from './modules/sliderCarousel';
import slider from './modules/carouselPhoto';

chooseClub();
freeVisit();
callBackModal();
maskPhone('[name=phone]');
sendForm();
mainSlider();
if(document.location.pathname === '/index.html'){
    present();
}

const carousel = new sliderCarousel({
    main: '#services>.wrapper' ,
    wrap: '.services-slider', 
    infinity:  true,
    slidesToShow: 4,
});

carousel.init();
slider();
