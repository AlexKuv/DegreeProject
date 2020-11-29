const present = () => {
  const presentImg = document.querySelector('.fixed-gift'),
  presentModal = document.getElementById('gift');

  presentImg.addEventListener('click', () => {
    presentModal.style.display = 'block';
    presentImg.style.display = 'none';
  });

  presentModal.addEventListener('click', (e) => {
      let target = e.target;

      if(target.matches('.close_icon')){
        presentModal.style.display = 'none';
        presentImg.style.display = 'block';
      }else if(target.matches('.close-btn')) {
        presentModal.style.display = 'none';
        presentImg.style.display = 'block';
      }else {
      target = target.closest('.form-content');
        if(!target) {
          presentModal.style.display = 'none';
          presentImg.style.display = 'block';
        }
      }
  });
};

export default present;
