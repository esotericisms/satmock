function startTest() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("testScreen").style.display = "block";
  startTimer();
}

let time = 31 * 60 + 39;
function startTimer() {
  const timerElement = document.getElementById("timer");
  const interval = setInterval(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    timerElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    time--;
    if (time < 0) clearInterval(interval);
  }, 1000);
}

function nextQuestion() {
  alert("Go to next question (not implemented)");
}
function prevQuestion() {
  alert("Go to previous question (not implemented)");
}

