const chooseClub = () => {
  const clubSelect = document.querySelector('.club-select'),
  clubUl = clubSelect.querySelector('ul');

  document.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.club-select')){
        clubUl.style.display = clubUl.style.display ==='block' ? 'none' : 'block';
    }
    if(!target.closest('.club-select')){
      clubUl.style.display ='none';
    }

  });
};

export default chooseClub;