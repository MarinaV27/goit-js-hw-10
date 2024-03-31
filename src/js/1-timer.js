
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const TIMER_DELAY = 1000;
let intervalId = null;
let userSelectedDate = null;
let currentDate = null;

const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const pickerInput = document.querySelector('#datetime-picker');

startBtn.disabled = true;
startBtn.addEventListener('click', onStartCounter);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()) {
        iziToast.warning({
          title: 'Caution',
          message: 'Please choose a date in the future',
      });
      } else {
        userSelectedDate = selectedDates[0].getTime();
        startBtn.disabled = false;
      }
    },
  };

const fp = flatpickr(pickerInput, options);
  function onStartCounter() {
      counter.start();
    }
    
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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  
  
const counter = {
    start() {
      intervalId = setInterval(() => {
      currentDate = Date.now();
      const deltaTime = userSelectedDate - currentDate;
      updateTimerface(convertMs(deltaTime));
      startBtn.disabled = true;
      pickerInput.disabled = true;
    if (deltaTime <= 1000) {
        this.stop();
        }
        }, TIMER_DELAY);
        },
        stop() {
          startBtn.disabled = true;
          pickerInput.disabled = false;
          clearInterval(intervalId);
          return;
          },
          };

   function updateTimerface({ days, hours, minutes, seconds }) {
   dataDays.textContent = `${days}`;
   dataHours.textContent = `${hours}`;
   dataMinutes.textContent = `${minutes}`;
   dataSeconds.textContent = `${seconds}`;
 }

 function addLeadingZero(value) {
   return String(value).padStart(2, '0');
 }
 