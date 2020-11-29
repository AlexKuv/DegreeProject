const fixedMenu =() => {
  window.addEventListener('scroll', function () {
    let topMenu = document.querySelector('.top-menu');
    let x = window.innerWidth;

    if (window.pageYOffset > 190 && x < 768) {
      topMenu.style.position = 'fixed';
    } else {
      topMenu.style.position = '';
    }
  });
};

export default fixedMenu;