// DOM element
const startScreen = document.getElementById('start-screen') ;
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton= document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');


const quizQuestions =[
  {
    question:"who is the prime minister of india",
    answer:[
      {text:"rahman", correct: false},
      {text:"modi", correct:true},
      {text:"nerswn",correct:false},
      {text:"bhujan", correct:false},
    ]
  },
  {
    question:"who is the prime minister of india",
    answer:[
      {text: "rahman", correct: false},
      {text:"modi", correct:true},
      {text:"nerswn",correct:false},
      {text:"bhujan", correct:false},
    ]
  },
  {
    question:"who is the prime minister of india",
    answer:[
      {text: "rahman", correct: false},
      {text:"modi", correct:true},
      {text:"nerswn",correct:false},
      {text:"bhujan", correct:false},
    ]
  },
  {
    question:"who is the prime minister of india",
    answer:[
      {text: "rahman", correct: false},
      {text:"modi", correct:true},
      {text:"nerswn",correct:false},
      {text:"bhujan", correct:false},
    ]
  },
  {
    question:"who is the prime minister of india",
    answer:[
      {text: "rahman", correct: false},
      {text:"modi", correct:true},
      {text:"nerswn",correct:false},
      {text:"bhujan", correct:false},
    ]
  }
]

// const state vars

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled=false;

totalQuestionsSpan.textContent=quizQuestions.length;
maxScoreSpan.textContent=quizQuestions.length;

// event listenrs

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click",restartQuiz)

function startQuiz(){
  // reset
  currentQuestionIndex=0;
  scoreSpan.textContent=0;
  score = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active")
  showQuestion();
}

function showQuestion(){
  answerDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex]
   
}
function restartQuiz(){ 
  console.log("quiz re-started");
}

