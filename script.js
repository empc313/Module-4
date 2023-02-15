//Elements needed
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");

//Quiz Questions
var questions = [
  {
    title: "Commonly used date type DO NOT include:",
    choices: ["booleans", "strings", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if/else statment is enclosed within _____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  { title: "What", choices: ["1", "2", "3", "4"], answer: "1" },
];

//Functions of the quiz
function startQuiz() {
  var startScreenEl = document.getElementById("start-quiz");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 100);
  timerEl.textcontent = time;
  getQuestion();
}
