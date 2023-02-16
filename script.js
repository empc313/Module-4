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
var currentQuestion = 0;
var timerId;

//show question
function showQuestion(q) {
  document.getElementById("#title").innerHTML;
}

function startGame(event) {
  event.preventDefault();
  console.log("startGame");
  startBtn.currentQuestion.add('hide');
  questions.currentQuestion.remove('hide');
  nextQuestion();
  //title.setAttribute('class', 'hide');
}
startBtn.addEventListener("click", startGame);
document.getElementById("questions");

//click event to check answer to question, move onto the next question
//move to next question in the array
function nextQuestion(event) {
  questionsEl.textContent = questions[currentQuestion].title;
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    //checks answer that is choosen right or wrong
    if (event.target.textContent === questions[currentQuestion].correct) {
      console.log("nextQuestion");
    }
  }
}

//timer function
function clock() {
  var timerInterval = setInterval(function () {
    countDown--;
    timerEl.textContent = "Time Left:" + countDown;
    //if ( count is 0 end game)
  });
}

//function for end of game

//How do I store the initials and the highscores at the end of the game
// (localStorage.getItem(SCORES))