const popupMenu = () => {
  const popup = document.querySelector('.popup-menu');
  const popupMenuBtn = document.querySelector('.hidden-large>img');

  popupMenuBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
  popup.addEventListener('click', (e) => {
    let target = e.target;
    if(target.matches('.close-menu-btn>img')){
       popup.style.display = 'none';
    }
    if(target.matches('.scroll>a')){
      popup.style.display = 'none';
    }
  });

};

export default popupMenu;