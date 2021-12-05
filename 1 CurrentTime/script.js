import {getDate} from './helpers/getDate.js'

const button = document.querySelector('.show-btn');
const wrap = document.querySelector('.date-wrapper')

button.addEventListener('click', () => {
  wrap.innerText = getDate();
  wrap.classList.toggle('show-hide')
})