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
      showQuestion(currentIndex);
    });
}

function showQuestion(index) {
  const q = questions[index];
  const html = `
    <h3>Section 1, Module 1: Reading and Writing</h3>
    <p style="margin-bottom: 25px;">${q.passage}</p>
    <p><strong>${q.question}</strong></p>
    ${q.choices.map((choice, i) =>
      `<div><label><input type="radio" name="choice"> ${String.fromCharCode(65 + i)}. ${choice}</label></div>`
    ).join("")}
    <p style="margin-top: 15px;"><input type="checkbox"> Mark for Review</p>
  `;
  document.getElementById("questionContainer").innerHTML = html;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
  }
}

function startTimer() {
  let time = 32 * 60;
  const display = document.getElementById("timer");
  const interval = setInterval(() => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    display.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    time--;
    if (time < 0) clearInterval(interval);
  }, 1000);
}


