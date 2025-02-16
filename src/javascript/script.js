let targetDate = new Date("Apr 05, 2025 19:30:00-03:00").getTime();

daysEle = document.getElementById("dias");
hoursEle = document.getElementById("horas");
minutesEle = document.getElementById("minutos");
secondsEle = document.getElementById("segundos");

let countdownTimer = setInterval (() => {
  let now = new Date().getTime();
  let timeDiff = targetDate - now;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  daysEle.innerText = days;
  hoursEle.innerText = hours;
  minutesEle.innerText = minutes;
  secondsEle.innerText = seconds;
});
