!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector(".free-visit>p>a"),t=document.getElementById("free_visit_form");e.addEventListener("click",e=>{e.target;t.style.display="block"}),t.addEventListener("click",e=>{let n=e.target;n.matches(".close_icon")?t.style.display="none":(n=n.closest(".form-content"),n||(t.style.display="none"))})};var o=()=>{const e=document.querySelector(".callback-btn"),t=document.getElementById("callback_form");e.addEventListener("click",e=>{e.target;t.style.display="block"}),t.addEventListener("click",e=>{let n=e.target;n.matches(".close_icon")?t.style.display="none":(n=n.closest(".form-content"),n||(t.style.display="none"))})};var r=function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e),l=function(e){const n=e.keyCode,l=t,o=l.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let c=0,s=l.replace(/[_\d]/g,(function(e){return c<r.length?r.charAt(c++)||o.charAt(c):e}));c=s.indexOf("_"),-1!=c&&(s=s.slice(0,c));let a=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")};for(const e of n)e.addEventListener("input",l),e.addEventListener("focus",l),e.addEventListener("blur",l)};var c=()=>{const e=document.querySelectorAll("form");document.querySelectorAll('[name="phone"]');const t=document.createElement("div");t.style.cssText="\n font-size: 2 rem;\n color: gray;\n margin-top: 10px;\n ",e.forEach(e=>{e.addEventListener("submit",n=>{n.preventDefault(),e.appendChild(t),t.textContent="Идет отправка";const l=new FormData(e);let o={};l.forEach((e,t)=>{o[t]=e}),fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(n=>{200===n.status?(t.textContent="Отправлено",e.querySelectorAll("input").forEach(e=>e.value="")):(t.textContent="Ошибка!",e.querySelectorAll("input").forEach(e=>e.value=""),console.error(n.status))}).catch(e=>{console.error(e)}),setTimeout(()=>{t.textContent=""},5e3)});e.querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>{e.matches('[placeholder="Ваше имя..."]')&&(e.value=e.value.replace(/[^а-яА-Я]/,""))})})})};var s=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,n=0;const l=()=>{e[n].style.display="none",n++,n>=e.length&&(n=0),((e,t)=>{e[t].style.display="flex"})(e,n)};((e=3e3)=>{t=setInterval(l,e)})()};var a=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",()=>{t.style.display="block",e.style.display="none"}),t.addEventListener("click",n=>{let l=n.target;l.matches(".close_icon")||l.matches(".close-btn")?(t.style.display="none",e.style.display="block"):(l=l.closest(".form-content"),l||(t.style.display="none",e.style.display="block"))})};(()=>{const e=document.querySelector(".club-select").querySelector("ul");document.addEventListener("click",t=>{let n=t.target;n.closest(".club-select")&&(e.style.display="block"===e.style.display?"none":"block"),n.closest(".club-select")||(e.style.display="none")})})(),l(),o(),r("[name=phone]"),c(),s(),a()}]);