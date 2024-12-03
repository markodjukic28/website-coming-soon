const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minutesId = document.getElementById('minutes');
const secondsId = document.getElementById('seconds');

const countdownDate = new Date('December 28, 2024 00:00:00 ').getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysId.innerHTML = days;
  hoursId.innerHTML = String(hours).padStart(2, '0');
  minutesId.innerHTML = String(minutes).padStart(2, '0');
  secondsId.innerHTML = String(seconds).padStart(2, '0');
}, 1000);
