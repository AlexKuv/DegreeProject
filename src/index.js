'use strict';

import chooseClub from './modules/chooseClub';
import freeVisit from './modules/freeVisit';
import callBackModal from './modules/callBackModal';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import present from './modules/present';

chooseClub();
freeVisit();
callBackModal();
maskPhone('[name=phone]');
sendForm();
mainSlider();
present();