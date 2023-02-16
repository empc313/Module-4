//Elements needed
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var timerEl = document.querySelector("#time");
var currentQuestionIndex = 0;
var time = question.length * 20;
var timerId;

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

//Functions of the quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
function showQuestions(questions, quizContainer){
var output = [];
var answer;
for(var i=0; i<questions.length; i++){
  answers = [];
  
  for (alerts[i].answers) 
  {answers.push(
      '<label>'
        + '<input type="button" name="question'+i+'" value="'+answer+'">'
        + answer + ': '
        + questions[i].answers[letter]
      + '</label>'
    );
  }

  function showResults(){
}
  showQuestions(questions);

  submitButton.onclick = function(){
    showResults();
  };
}}}


