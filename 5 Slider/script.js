import { images } from "./constants/image.constants.js";

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slide = document.querySelector('.slide');

let currentIndex = 0;
let lastIndex = images.length - 1;

const setImg = (currentIndex) => {
  slide.src = `./assets/${images[currentIndex]}`
}

setImg(currentIndex);

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
  setImg(currentIndex)
})

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  setImg(currentIndex);
})