function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

const changeColor = function () {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
};

const stopChangeColor = function () {
  clearInterval(timerId);
  startBtn.disabled = false;
};

startBtn.addEventListener('click', changeColor);

stopBtn.addEventListener('click', stopChangeColor);
