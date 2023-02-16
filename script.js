//Quiz Questions, define
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
  {
    title: "Arrays in Javascript can be used to store ___.",
    choices: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },
];

//list of variables
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var timerEl = document.querySelector("#time");
var currentQuestionIndex = 0;
var timerId;

function showQuestion(q) {
  document.getElementById("#title").innerHTML;
}

function startGame(event) {
  event.preventDefault();
  console.log("startGame");
}

startBtn.addEventListener("click", startGame);
//click event to check answer to question, move onto the next question
document.getElementById("questions");

//timer function
function clock() {
  var timerEl = setInterval();
}

//last page
