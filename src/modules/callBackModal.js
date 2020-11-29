const callBackModal = () => {
  const callBackBtn = document.querySelector('.callback-btn'),
  callbackForm = document.getElementById('callback_form');

  
  callBackBtn.addEventListener('click', (e) => {
    let target = e.target;
    callbackForm.style.display = 'block';

 

  });
  
   callbackForm.addEventListener('click' , (e) => {
     let target = e.target;
      if(target.matches('.close_icon')){
        callbackForm.style.display = 'none';
      }else {
        target = target.closest('.form-content');
        if(!target) {
          callbackForm.style.display = 'none';
        }
      }
    });


};

export default callBackModal;