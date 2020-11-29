const scrollTop = function scrollTop() {
  let headTop = document.querySelector('.head-main');
  const btnToTop = document.getElementById('totop');
  btnToTop.style.display = 'none';
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 680) {
      btnToTop.style.display = 'block';
    } else {
      btnToTop.style.display = 'none';
    }

    btnToTop.addEventListener('click', (e) => {
      e.preventDefault();
      headTop.scrollIntoView({behavior: "smooth", block: 'start'});
    });
  });
};

export default scrollTop;