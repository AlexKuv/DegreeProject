const sendForm = () => {
 const formAll = document.querySelectorAll('form');
const thanks = document.getElementById('thanks');

const cardOrder = document.getElementById('card_order');

 const statusMessage = document.createElement('div');
 statusMessage.style.cssText = `
 font-size: 2 rem;
 color: gray;
 margin-top: 10px;
 `;


 formAll.forEach(item => {
   const popup = document.querySelectorAll('.popup');
  let a = document.getElementById('price-total');

    item.addEventListener('submit', (event) => {
      event.preventDefault();

      item.appendChild(statusMessage);
      statusMessage.textContent = 'Идет отправка';
      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {

        if (event.path[0] === cardOrder) {
          body[key] = val;
        body['Price-total'] = a.textContent;
        } else {
        body[key] = val;
        }

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
          console.log(body);
          popup.forEach(item=>item.style.display='none');
          thanks.style.display = 'block';
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