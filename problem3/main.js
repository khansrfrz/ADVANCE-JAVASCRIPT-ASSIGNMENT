const clock = document.querySelector(".clock");

let second = 0,
  minute = 0,
  hour = 0,
  intervalID;

const start = () => {
  intervalID = setInterval(() => {
    if (second < 59) {
      second++;
    }
    else if (min > 59) {
      hour++;
      min = 0;
    }
    else {
      second = 0;
      minute++;
    }

    const hours = hour.toString().padStart(2, '0');
    const minutes = minute.toString().padStart(2, '0');
    const seconds = second.toString().padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

const stop = () => {
  clearInterval(intervalID);
}

const reset = () => {
  stop();
  second = 0;
  clock.innerText = '00:00:00';

}