let currentIndex = 0;
let questions = [];

function startTest() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("testScreen").style.display = "flex";
  startTimer();

  fetch("questions.json")
    .then(res => res.json())
    .then(data => {
      questions = data;
      document.getElementById("totalQuestions").textContent = questions.length;
      showQuestion(currentIndex);
    });
}

function showQuestion(index) {
  const q = questions[index];

  document.getElementById("questionNumber").textContent = index + 1;
  document.getElementById("leftColumn").innerHTML = `<p>${q.passage}</p>`;
  const choicesHTML = q.choices.map((choice, i) =>
    `<label><input type="radio" name="choice"> ${String.fromCharCode(65 + i)}. ${choice}</label>`
  ).join("");

  document.getElementById("rightColumn").innerHTML = `
    <p><strong>${q.question}</strong></p>
    <div class="choices">${choicesHTML}</div>
    <p style="margin-top: 10px;"><input type="checkbox"> Mark for Review</p>
  `;
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



