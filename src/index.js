'use strict';

import chooseClub from './modules/chooseClub';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import slider from './modules/carouselPhoto';
import getPromocode from './modules/getPromocode';
import carousel from './modules/carousel';
import scrollTop from './modules/scrollTop';
import showBurger from './modules/showBurger';
import fixedMenu from './modules/fixedMenu';
import popupMenu from './modules/popupMenu';
import modalWindows from './modules/modalWindows';

chooseClub();
maskPhone('[name=phone]');
sendForm();
mainSlider();
getPromocode();
carousel();
slider();
scrollTop();
showBurger();
fixedMenu();
popupMenu();
modalWindows();