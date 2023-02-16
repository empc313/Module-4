

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
  { title: "What", choices: ["1", "2", "3", "4"], answer: "1" },
  { title: "What", choices: ["1", "2", "3", "4"], answer: "1" },
  { title: "What", choices: ["1", "2", "3", "4"], answer: "1" },
];


function showQuestion(q){
  var titleDiv =document.getElementById('#title');
  titleDiv.textContent = q.title;
}

//Elements needed
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var timerEl = document.querySelector("#time");
var currentQuestionIndex = 0;
var timerId;


