//Quiz Questions, how do I define the array
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
var quizPage = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var timerEl = document.querySelector("#time");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-quiz");
var hidden = document.querySelector(".hide");
var currentQuestion = 0;
var timerId;
var score = 0;

//How do I get my questions to display when I click start? show question
function showQuestion(q) {
  document.getElementById("#title").innerHTML;
}

//Function to start the game, it should hide the start page and remove the class 'hide' from the quizPage
//How do I get it to display each question in the array
function startGame(event) {
  event.preventDefault();
  console.log("startGame");
  startPage.classList.add("hide");
  quizPage.classList.remove("hide");
  displayQuestion();

  //title.setAttribute('class', 'hide');
}
startBtn.addEventListener("click", startGame);
document.getElementById("questions");

//click event to check answer to question, move onto the next question
//move to next question in the array, how do I move through each question?
function nextQuestion(event) {
  questionsEl.textContent = questions[currentQuestion].title;
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    //checks answer that is choosen right or wrong
    if (event.target.textContent === questions[currentQuestion].correct) {
      console.log("nextQuestion");
    }
  }
}

//timer function, needs to stop game when time is 0
function clock() {
  var timerInterval = setInterval(function () {
    countDown--;
    timerEl.textContent = "Time Left:" + countDown;
    //if ( count is 0 end game)
  });
}

//function used to end the quiz, hides the quiz page, and reveals the end page and the score is shown
function endGame() {
  quizPage.classList.add("hide");
  endPage.classList.remove("hide");
  finalScore.textContent = score;
}

//function for last page, end page needs to return the start page hide end page, reveal start
function returnToStart() {
  endPage.classList.add("hide");
  startGame.classList.remove("hide");
}

//How do I get this to store the initials and the highscores at the end of the game
function saveScore(event) {
  event.preventDefault();
  var initialsEl = document.querySelector("#initials").value;
  var savedScore = initials + ":" + score;
  //logging the score onto the console and saving it to local storage
  console.log(savedScore);
  localStorage.getItem(highScores);
  highScores[initials] = score;
  localStorage.setItem(highScores, JSON.stringify(highScores));
  document.querySelector("#initials-input").value = "";
}
