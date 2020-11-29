const freeVisit = () => {
  const visitBtn = document.querySelector('.free-visit>p>a'),
   visitModal = document.getElementById('free_visit_form');
   

  visitBtn.addEventListener('click', (e) => {
    let target = e.target;
    visitModal.style.display = 'block'; 
  });

      visitModal.addEventListener('click' , (e) => {
        let target = e.target;
      if(target.matches('.close_icon')){
        visitModal.style.display = 'none';
      }else {
      target = target.closest('.form-content');
        if(!target) {
          visitModal.style.display = 'none';
        }
      }
    });

};

export default freeVisit;