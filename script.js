// DOM element
const startScreen = document.getElementById('start-screen') ;
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
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
    question:"(198938-9786)* 56",
    answer:[
      {text:"10592512", correct: true},
      {text:"10283656", correct:false},
      {text:"78673649",correct:false},
      {text:"21998753", correct:false},
    ]
  },
  {
    question:"bodo thunlai san khwo mala falinai jayw?",
    answer:[
      {text: "5 june", correct: false},
      {text:"16 november", correct:true},
      {text:"15 august",correct:false},
      {text:"26 january", correct:false},
    ]
  },
  {
    question:"gotosha shan mala falinai jayw",
    answer:[
      {text: "12 november", correct: false},
      {text:"14 november", correct:true},
      {text:"15 november",correct:false},
      {text:"16 november", correct:false},
    ]
  },
  {
    question:"What is the first film of Bodo?",
    answer:[
      {text: "abo ", correct: false},
      {text:"Alayaron", correct:true},
      {text:"daina",correct:false},
      {text:"Jiuni Simang", correct:false},
    ]
  },
  {
    question:"total district of btr?",
    answer:[
      {text: "5", correct: true},
      {text:"4", correct:false},
      {text:"6",correct:false},
      {text:"7", correct:false},
    ]
  }
]

// const state vars

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled=false;

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
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex]
  currentQuestionSpan.textContent=currentQuestionIndex + 1
  const progressPercent = (currentQuestionIndex/quizQuestions.length)*100;
  progressBar.style.width = progressPercent + "%"

  questionText.textContent=currentQuestion.question

  answersContainer.innerHTML="";
  currentQuestion.answer.forEach(answer=>{
    const button = document.createElement("button")
    button.textContent=answer.text
    button.classList.add("answer-btn")

    // dataset= its a property of thr button element that allows you to store custom d
    button.dataset.correct=answer.correct;
    button.addEventListener("click",selectAnswer);
    answersContainer.appendChild(button);
  });

   }
   function selectAnswer(event){
    // optimization check
    if(answersDisabled) return
    answersDisabled = true

    const selectButton = event.target;
    const isCorrect = selectButton.dataset.correct==="true"

    Array.from(answersContainer.children).forEach(button=>{
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }else if(button === selectButton){
        button.classList.add("incorrect");
      }
    });
    if(isCorrect){
      score++;
      scoreSpan.textContent = score
    }
    setTimeout(()=>{
      currentQuestionIndex++
      if(currentQuestionIndex < quizQuestions.length){
        showQuestion()
      }else{showResults()

      }
    },1000)
   }

   function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;
    const percentage = (score/quizQuestions.length)*100

    if (percentage===100){
      resultMessage.textContent ="perfect! you are awesome";
    }else if (percentage>=80){
      resultMessage.textContent ="great job! you did a good work";
    }else if (percentage>=60){
      resultMessage.textContent ="good effort! keep learning";
    }else if (percentage>=40){
      resultMessage.textContent ="not bad! don't lose hope";
    }else{
       resultMessage.textContent="keep studying! you can do it";
    }
   }
function restartQuiz(){ 
  resultScreen.classList.remove("active");
    startQuiz();
  
}


