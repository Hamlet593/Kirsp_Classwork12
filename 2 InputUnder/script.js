const input = document.querySelector('#input');
const wrap = document.querySelector('.wrap');

input.addEventListener('input', (evt) => {
    const text = input.value;
    wrap.innerText = text;
})