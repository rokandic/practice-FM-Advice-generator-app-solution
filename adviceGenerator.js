'use strict';
const button = document.getElementById('dice-button');
const api = 'https://api.adviceslip.com/advice';


function generateAdvice() { 
  fetch(api, {cache: "no-cache"})
    .then(response => response.json() )
    .then( adviceObj => {
      let adviceText = adviceObj.slip.advice;
      let idText = adviceObj.slip.id;
      
      let title = document.getElementById('advice-title');
      let text = document.getElementById('advice-text');

      title.innerText = `Advice #${idText}`;
      text.innerText = `“${adviceText}ˮ`;
    })
    .catch(error => console.error(error));
}


button.addEventListener('click',generateAdvice);
generateAdvice();