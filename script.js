let timeLeft = 60 * 60; 
const timerDisplay = document.getElementById("timer");

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    timerDisplay.textContent = `${minutes} хвилин`;

    if (timeLeft === 30 * 60) {
        alert("Залишилось менше половини часу!");
    }

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000); 
    }
}

updateTimer();


let timeLeft2 = 30 * 1000;
const timerDisplay2 = document.getElementById("timer2");
const startButton = document.getElementById("startButton");

function updateTimer2() {
  let seconds = Math.floor(timeLeft2 / 1000);
  timerDisplay2.textContent = `${seconds}.${timeLeft2 % 1000}`;

  if (timeLeft2 === 10 * 1000) {
    timerDisplay2.classList.add("animation");
  }

  if (timeLeft2 <= 0) {
    timerDisplay2.classList.remove("animation");
    startButton.disabled = false;
    return;
  }

  timeLeft2 -= 10;
  setTimeout(updateTimer2, 10);
}

function startTimer() {
  timeLeft2 = 30 * 1000;
  startButton.disabled = true;
  updateTimer2();
}

startTimer();
