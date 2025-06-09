let currentIndex = 0;
let questions = [];

function startTest() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("testScreen").style.display = "block";
  startTimer();
  fetch("questions.json")
    .then(res => res.json())
    .then(data => {
      questions = data;
      loadQuestion(currentIndex);
    });
}

function loadQuestion(index) {
  const q = questions[index];
  const container = document.getElementById("questionContainer");
  container.innerHTML = `
    <h3>Section 1, Module 1: Reading and Writing</h3>
    <p>${q.passage}</p>
    <p><strong>${q.question}</strong></p>
    ${q.choices.map((choice, i) =>
      `<div><label><input type="radio" name="choice" value="${choice}"> ${String.fromCharCode(65 + i)}. ${choice}</label></div>`
    ).join("")}
    <p style="margin-top: 10px;"><input type="checkbox"> Mark for Review</p>
  `;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  }
}

function startTimer() {
  let time = 32 * 60; // 32 minutes
  const timerDisplay = document.getElementById("timer");
  const interval = setInterval(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    time--;
    if (time < 0) clearInterval(interval);
  }, 1000);
}

