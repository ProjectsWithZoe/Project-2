const d1 = document.getElementById("days");
const h1 = document.getElementById("hours");
const m1 = document.getElementById("minutes");
const s1 = document.getElementById("seconds");
const newYears = "01 Jan 2023";

function countdown() {
  let newYearsDate = new Date(newYears);
  let currentDate = new Date();

  totalSeconds = Math.abs(newYearsDate - currentDate) / 1000;
  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  minutes = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;
  console.log(days, hours, minutes);

  d1.innerHTML = formatTime(days);
  h1.innerHTML = formatTime(hours);
  m1.innerHTML = formatTime(minutes);
  s1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
