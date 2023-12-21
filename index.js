const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

setInterval(timeUpdate, 1000);

function timeUpdate() {
  let time = new Date();
  let hh = time.getHours();
  hh = hh > 12 ? hh - 12 : hh;
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  hours.style.transform = `rotateZ(${hh * 30}deg)`;
  minutes.style.transform = `rotateZ(${mm * 6}deg)`;
  seconds.style.transform = `rotateZ(${ss * 6}deg)`;
}