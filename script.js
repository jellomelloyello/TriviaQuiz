let currentQuestion = 0; // start count from zero
let currentScore = 0;

//Define quiz questions
const quizQuestions = [
  {
    question: "What is the name of this dish?",
    imgSrc: "",
    choices: ["Chicken rice", "Nasi Goreng", "Prata"],
    answer: "Chicken rice"
  },

  {
    question: "This is the famous breakfast dish of Singapore",
    imgSrc: "",
    choices: ["Goreng Pisang", "Kaya Toast", "Pancakes"],
    answer: "Kaya Toast"
  },

  {
    question: "Which fruit in Singapore is known as the 'King of Fruits?'",
    imgSrc: "",
    choices: ["Durian", "Pineapple", "Mango"],
    answer: "Durian"
  },

  {
    question: "What is the name of the hawker centre in Singapore which was featured in a scene from the movie Crazy Rich Asians?",
    imgSrc: "",
    choices: ["Newton Food Centre", "Chomp Chomp", "East Coast Lagoon"],
    answer: "Newton Food Centre"
  },

  {
    question: "This soy bean milk drink mixed with grass jelly is usually found at hawker centres and coffee shops. What is the colloquial name of this beverage?",
    imgSrc: "",
    choices: ["Ying Yang", "Mr Bean", "Michael Jackson"],
    answer: "Ying Yang"
  },

]

// Get elements from the dom

const playButton = document.getElementById("play-btn")
const divTitle = document.querySelector(".singapore")
const scorePage = document.querySelector(".quiz-score")

const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const answerButton1 = document.getElementById("answer1")
const answerButton2 = document.getElementById("answer2")
const answerButton3 = document.getElementById("answer3")

scorePage.classList.add("hide")// hide score page

//Create quiz score
const createQuizScore = () => {
  scorePage.innerText = ("You scored " + currentScore + " out of " + quizQuestions.length);
};


playButton.addEventListener("click", playGame)

function playGame() {
  currentQuestion = -1; // set to -1 because in the nextquestion()function below, currentQuestion is set as currentQuestion++ 
  playButton.classList.add("hide")// hide food button after clicking
  questionContainerElement.classList.remove("hide") //to show the following question page
  divTitle.classList.add("hide")
  scorePage.classList.add("hide")
  nextQuestion();
  questionElement.innerText = quizQuestions[currentQuestion].question

  }
  // if(currentScore === )

  // answerButtonsElement.addEventListener("click", checkAnswer)

  const button = document.getElementById("answer-buttons")

  button.addEventListener("click", buttonClick)

  function buttonClick(e){
  if (e.target.innerText === quizQuestions[currentQuestion].answer)
{ 
  console.log("true");
  currentScore++
} else {
  console.log("false");
}
  }

console.log(quizQuestions[currentQuestion].answer)
console.log(currentScore);


//Move forward in quiz
answerButtonsElement.addEventListener("click", nextQuestion)

function nextQuestion() {
  currentQuestion++
  console.log(currentQuestion);
  if (currentQuestion >= quizQuestions.length) {
    question.style.display= "none";
    answerButtonsElement.style.display= "none";
    createQuizScore();
    scorePage.classList.remove("hide")
  } else {
    questionElement.innerText = quizQuestions[currentQuestion].question
  
    for (let j = 0; j < quizQuestions[currentQuestion].choices.length; j++) // loop through the choices from quizQuestions
    // {
    //  console.log(quizQuestions[currentQuestion].choices[j]);
     document.getElementById(`answer${j+1}`).innerText = quizQuestions[currentQuestion].choices[j]
     
    }
  }
  
  

