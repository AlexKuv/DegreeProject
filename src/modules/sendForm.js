const sendForm = () => {
 const formAll = document.querySelectorAll('form');

 let a = document.querySelectorAll('[name="phone"]');


 const statusMessage = document.createElement('div');
 statusMessage.style.cssText = `
 font-size: 2 rem;
 color: gray;
 margin-top: 10px;
 `;

 formAll.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = 'Идет отправка';

      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

    fetch('./server.php', {
      method: 'POST',
       headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => {
        if(response.status === 200) {
          statusMessage.textContent = 'Отправлено';
          item.querySelectorAll('input').forEach(i => i.value = '');
        } else {
          statusMessage.textContent = 'Ошибка!';
          item.querySelectorAll('input').forEach(i => i.value = '');
          console.error(response.status);
        }
      })
      .catch((error) => {
          console.error(error);
      });

    setTimeout(() => {
      statusMessage.textContent = '';
    }, 5000);

    });

  //валидация поля имени и коментария
  const inputValid = item.querySelectorAll('input'); 
    inputValid.forEach(elem => {
    elem.addEventListener('input', () => {
        if(elem.matches('[placeholder="Ваше имя..."]')){
        elem.value = elem.value.replace(/[^а-яА-Я]/, '');
        }
      });
    });

 });


};

export default sendForm;