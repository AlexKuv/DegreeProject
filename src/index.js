'use strict';

import chooseClub from './modules/chooseClub';
import freeVisit from './modules/freeVisit';
import callBackModal from './modules/callBackModal';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import present from './modules/present';
import slider from './modules/carouselPhoto';
import getPromocode from './modules/getPromocode';
import carousel from './modules/carousel';
import scrollTop from './modules/scrollTop';
import showBurger from './modules/showBurger';
import fixedMenu from './modules/fixedMenu';

chooseClub();
freeVisit();
callBackModal();
maskPhone('[name=phone]');
sendForm();
mainSlider();
if(document.location.pathname === '/index.html'){
    present();
}
getPromocode();
carousel();
slider();
scrollTop();
showBurger();
fixedMenu();