import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let result;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    result = selectedDates[0];
    const resultMili = new Date(result).getTime();
    const currentMili = options.defaultDate.getTime();
    if (resultMili > currentMili) {
      startBtn.disabled = false;
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');

flatpickr('#datetime-picker', options, {});

const createTimer = function () {
  const chosenMili = new Date(result).getTime();
  const timeInterval = setInterval(() => {
    const difference = chosenMili - new Date().getTime();
    console.log(difference);
    if (difference < 999) {
      clearInterval(timeInterval);
    }
    days.textContent = addLeadingZero(convertMs(difference).days);
    hours.textContent = addLeadingZero(convertMs(difference).hours);
    minutes.textContent = addLeadingZero(convertMs(difference).minutes);
    seconds.textContent = addLeadingZero(convertMs(difference).seconds);
  }, 1000);
};

startBtn.addEventListener('click', createTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
