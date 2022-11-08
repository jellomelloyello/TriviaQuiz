let currentQuestion = 0; // start count from zero
let currentScore = 0;

let message = ["Great Job! ", "That's just Okay.. ", "You can do better! "]

let gif = ["", "", "images/meh.gif"]



//Define quiz questions
const quizQuestions = [
  {
    question: "What is the name of this dish?",
    imgSrc: "images/prata.jpeg",
    choices: ["Chicken rice", "Nasi Goreng", "Prata"],
    answer: "Prata"
  },

  {
    question: "This is the famous breakfast dish of Singapore",
    imgSrc: "images/yakun.jpeg",
    choices: ["Goreng Pisang", "Kaya Toast", "Pancakes"],
    answer: "Kaya Toast"
  },

  {
    question: "Which fruit in Singapore is known as the 'King of Fruits?'",
    imgSrc: "images/fruits.jpeg",
    choices: ["Durian", "Pineapple", "Mango"],
    answer: "Durian"
  },

  {
    question: "What is the name of the hawker centre in Singapore which was featured in a scene from the movie Crazy Rich Asians?",
    imgSrc: "images/newton.jpeg",
    choices: ["Newton Food Centre", "Chomp Chomp", "East Coast Lagoon"],
    answer: "Newton Food Centre"
  },

  {
    question: "This soy bean milk drink mixed with grass jelly is usually found at hawker centres and coffee shops. What is the colloquial name of this beverage?",
    imgSrc: "images/michael.jpeg",
    choices: ["Ying Yang", "Mr Bean", "Michael Jackson"],
    answer: "Michael Jackson"
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
const picture = document.getElementById("picture")

scorePage.classList.add("hide")// hide score page from main page

//Quiz score message
const createQuizScore = () => {
  if (currentScore < 2) {
    scorePage.innerText = (gif[2] + message[2] + "You scored " + currentScore + "/" + quizQuestions.length + " ! ");
  } else if (currentScore === 2 || 3) {
    scorePage.innerText = (message[1] + "You scored " + currentScore + "/" + quizQuestions.length + " ! ");
  } else {
    scorePage.innerText = (message[0] + "You scored " + currentScore + "/" + quizQuestions.length + " ! ");
  }
};


//Play game
playButton.addEventListener("click", playGame)

function playGame() {
  currentQuestion = -1; // set to -1 because in the nextquestion()function below, currentQuestion is set as currentQuestion++ 
  playButton.classList.add("hide")// hide food button after clicking
  questionContainerElement.classList.remove("hide") //to show the following question page
  divTitle.classList.add("hide")
  scorePage.classList.add("hide")
  nextQuestion();

  answerButtonsElement.addEventListener("click", buttonClick)

  function buttonClick(e){
  if (e.target.innerText === quizQuestions[currentQuestion].answer) // check if the answer button that's clicked is the same as correct answer
  currentScore++ // add score to current score

  }

//Move forward in quiz
answerButtonsElement.addEventListener("click", nextQuestion)

function nextQuestion() {
  currentQuestion++
  if (currentQuestion >= quizQuestions.length) {
    createQuizScore();
    question.style.display= "none";
    answerButtonsElement.style.display= "none";
    scorePage.classList.remove("hide")
  } else {
    questionElement.innerText = quizQuestions[currentQuestion].question
    for (let i = 0; i < quizQuestions[currentQuestion].choices.length; i++) // loop through the choices from quizQuestions
     document.getElementById(`answer${i+1}`).innerText = quizQuestions[currentQuestion].choices[i] // assign choices to each answer buttons
    
     if(currentQuestion > 0) {
    picture.children[0].src = quizQuestions[currentQuestion].imgSrc
    } else {
    let img = document.createElement("img");
    img.src = quizQuestions[currentQuestion].imgSrc
    picture.appendChild(img)
    }
  }
   }
    }
  


