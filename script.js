let currentQuestion = 0; // start count from zero
let currentScore = 0;

let message = ["Great Job! ", "That's just Okay.. ", "You can do better! "]

let gif = ["images/win.gif", "images/okay.gif", "images/meh.gif"]


//Define Food Trivia Questions
const foodQuestions = [
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
const foodButton = document.getElementById("food-btn")
const generalButton = document.getElementById("general-btn")
const singlishButton = document.getElementById("singlish-btn")
const playAgainButton = document.getElementById("play-again")

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

//Create Quiz Score Message
const createQuizScore = () => {
  picture.children[0].src = gif

  if (currentScore < 2) {
    scorePage.innerText = (message[2] + "You scored " + currentScore + "/" + foodQuestions.length + " ! ");
    picture.children[0].src = gif[2]
  } else if (currentScore === 2 || currentScore === 3) {
    picture.children[0].src = gif[1]
    scorePage.innerText = (message[1] + "You scored " + currentScore + "/" + foodQuestions.length + " ! ");
  } else {
    picture.children[0].src = gif[0]
    scorePage.innerText = (message[0] + "You scored " + currentScore + "/" + foodQuestions.length + " ! ");
  }
};


//Play Food Trivia
foodButton.addEventListener("click", foodGame)

function foodGame() {
  currentQuestion = -1; // set to -1 because in the nextquestion()function below, currentQuestion is set as currentQuestion++ 
  foodButton.classList.add("hide")// hide food button after clicking
  generalButton.classList.add("hide")
  singlishButton.classList.add("hide")
  questionContainerElement.classList.remove("hide") //to show the following question page
  divTitle.classList.add("hide")
  scorePage.classList.add("hide")
  nextQuestion();

  answerButtonsElement.addEventListener("click", buttonClick)

  function buttonClick(e){
  if (e.target.innerText === foodQuestions[currentQuestion].answer) // check if the answer button that's clicked is the same as correct answer
  currentScore++ // add score to current score

  }

//Move forward in quiz
answerButtonsElement.addEventListener("click", nextQuestion)

function nextQuestion() {
  currentQuestion++
  if (currentQuestion >= foodQuestions.length) {
    playAgainButton.classList.remove("hide")
    createQuizScore();
    // playAgain();
    question.style.display= "none";
    answerButtonsElement.style.display= "none";
    scorePage.classList.remove("hide")
  } else {
    questionElement.innerText = foodQuestions[currentQuestion].question
    for (let i = 0; i < foodQuestions[currentQuestion].choices.length; i++) // loop through the choices from quizQuestions
     document.getElementById(`answer${i+1}`).innerText = foodQuestions[currentQuestion].choices[i] // assign choices to each answer buttons
  
     if(currentQuestion > 0) {
    picture.children[0].src = foodQuestions[currentQuestion].imgSrc
    } else {
    let img = document.createElement("img");
    img.src = foodQuestions[currentQuestion].imgSrc
    picture.appendChild(img)
    }
  }
   }

    }

  //Define General Trivia Questions
    const generalQuestions = [
  {
    question: "What is the name of this Singaporean Movie?",
    imgSrc: "images/homerun.jpeg",
    choices: ["The Unbeatables", "Home Run", "Ah Boys to Men"],
    answer: "Home Run"
  },

  {
    question: "What does it mean when your colleague ask you to 'chope' a table at the coffeeshop?",
    imgSrc: "images/chope.jpeg",
    choices: ["Stay at the table", "Reserve the table", "Wipe the table"],
    answer: "Reserve the table"
  },

  {
    question: "Your boss ask you to order black coffee with evaporated milk and extra sugar, how would you order at the coffee shop?",
    imgSrc: "images/kopi.jpeg",
    choices: ["Kopi C", "Kopi O Gah Dai", "Kopi C Gah Dai"],
    answer: "Durian"
  },

  {
    question: "Country erasers are a childhood favourite for many Singaporeans. How is it meant to be played?",
    imgSrc: "images/erasers.jpeg",
    choices: ["The person who erases off the flag first wins", "The person who flips his eraser on top of the opponent's eraser wins", "The person who guesses which country's flag is on the eraser wins"],
    answer: "The person who flips his eraser on top of the opponent's eraser wins"
  },

  {
    question: "Complete this song: Sars is the virus that I just want to... ",
    imgSrc: "images/garmit.jpeg",
    choices: ["Minus", "Multiply", "Defeat"],
    answer: "Minus"
  },

]

  scorePage.classList.add("hide")// hide score page from main page

  //Create Quiz Score Message
   let createGeneralQuizScore = () => {
      picture.children[0].src = gif
    
      if (currentScore < 2) {
        scorePage.innerText = (message[2] + "You scored " + currentScore + "/" + generalQuestions.length + " ! ");
        picture.children[0].src = gif[2]
      } else if (currentScore === 2 || currentScore === 3) {
        picture.children[0].src = gif[1]
        scorePage.innerText = (message[1] + "You scored " + currentScore + "/" + generalQuestions.length + " ! ");
      } else {
        picture.children[0].src = gif[0]
        scorePage.innerText = (message[0] + "You scored " + currentScore + "/" + generalQuestions.length + " ! ");
      }
    };
    
    //Play General Trivia
    generalButton.addEventListener("click", generalGame)
    
    function generalGame() {
      currentQuestion = -1; // set to -1 because in the nextquestion()function below, currentQuestion is set as currentQuestion++ 
      foodButton.classList.add("hide")// hide food button after clicking
      generalButton.classList.add("hide")
      singlishButton.classList.add("hide")
      questionContainerElement.classList.remove("hide") //to show the following question page
      divTitle.classList.add("hide")
      scorePage.classList.add("hide")
      nextQuestion();
    
      answerButtonsElement.addEventListener("click", buttonClick)
    
      function buttonClick(e){
      if (e.target.innerText === generalQuestions[currentQuestion].answer) // check if the answer button that's clicked is the same as correct answer
      currentScore++ // add score to current score
    
      }
    
    //Move forward in quiz
    answerButtonsElement.addEventListener("click", nextQuestion)
    
    function nextQuestion() {
      currentQuestion++
      if (currentQuestion >= generalQuestions.length) {
        createQuizScore();
        question.style.display= "none";
        answerButtonsElement.style.display= "none";
        scorePage.classList.remove("hide")
      } else {
        questionElement.innerText = generalQuestions[currentQuestion].question
        for (let i = 0; i < generalQuestions[currentQuestion].choices.length; i++) // loop through the choices from quizQuestions
         document.getElementById(`answer${i+1}`).innerText = generalQuestions[currentQuestion].choices[i] // assign choices to each answer buttons
      
        
         if(currentQuestion > 0) {
        picture.children[0].src = generalQuestions[currentQuestion].imgSrc
        } else {
        let img = document.createElement("img");
        img.src = generalQuestions[currentQuestion].imgSrc
        picture.appendChild(img)
        }
      }
       }
    
        }

         
    //Define Singlish Trivia Questions
    const singlishQuestions = [
      {
        question: "Which of the following Singlish words do not make any sense in this sentence: I don’t have ______",
        imgSrc: "",
        choices: ["Lah ", "Lor", "Wah"],
        answer: "Wah"
      },
    
      {
        question: "Fill in the blanks: Kanchiong _____Blur _______",
        imgSrc: "",
        choices: ["Spider, Sotong", "King Kong, Queen", "King, Ayam "],
        answer: "Spider, Sotong"
      },
    
      {
        question: "What does the word 'Alamak' means?",
        imgSrc: "",
        choices: ["oh man/ oh my gosh", "Oh", "Okay"],
        answer: "Oh man/ oh my gosh"
      },
    
      {
        question: "How would you use this word correctly: 'Cheem' ?",
        imgSrc: "",
        choices: ["This place is so cheem", "This exam question is so cheem", "This shop is so cheem"],
        answer: "This place is so cheem"
      },
    
      {
        question: "What does “steady pom pi pi” mean?",
        imgSrc: "",
        choices: ["Someone who can balance very well", "Someone who is calm and composed while handling a challenging task", "Someone who runs fast"],
        answer: "Someone who is calm and composed while handling a challenging task"
      },
    
    ]
  
      scorePage.classList.add("hide")// hide score page from main page
  
      //Create Quiz Score Message
      let createSinglishQuizScore = () => {
        picture.children[0].src = gif
      
        if (currentScore < 2) {
          scorePage.innerText = (message[2] + "You scored " + currentScore + "/" + singlishQuestions.length + " ! ");
          picture.children[0].src = gif[2]
        } else if (currentScore === 2 || currentScore === 3) {
          picture.children[0].src = gif[1]
          scorePage.innerText = (message[1] + "You scored " + currentScore + "/" + singlishQuestions.length + " ! ");
        } else {
          picture.children[0].src = gif[0]
          scorePage.innerText = (message[0] + "You scored " + currentScore + "/" + singlishQuestions.length + " ! ");
        }
      };
        
      //Play General Trivia
      singlishButton.addEventListener("click", singlishGame)
      
      function singlishGame() {
        currentQuestion = -1; // set to -1 because in the nextquestion()function below, currentQuestion is set as currentQuestion++ 
        foodButton.classList.add("hide")// hide food button after clicking
        generalButton.classList.add("hide")
        singlishButton.classList.add("hide")
        questionContainerElement.classList.remove("hide") //to show the following question page
        divTitle.classList.add("hide")
        scorePage.classList.add("hide")
        nextQuestion();
      
        answerButtonsElement.addEventListener("click", buttonClick)
      
        function buttonClick(e){
        if (e.target.innerText === singlishQuestions[currentQuestion].answer) // check if the answer button that's clicked is the same as correct answer
        currentScore++ // add score to current score
      
        }
        
      //Move forward in quiz
      answerButtonsElement.addEventListener("click", nextQuestion)
      
      function nextQuestion() {
        currentQuestion++
        if (currentQuestion >= singlishQuestions.length) {
          createQuizScore();
          question.style.display= "none";
          answerButtonsElement.style.display= "none";
          scorePage.classList.remove("hide")
        } else {
          questionElement.innerText = singlishQuestions[currentQuestion].question
          for (let i = 0; i < generalQuestions[currentQuestion].choices.length; i++) // loop through the choices from quizQuestions
            document.getElementById(`answer${i+1}`).innerText = singlishQuestions[currentQuestion].choices[i] // assign choices to each answer buttons
        
        
          if(currentQuestion > 0) {
        picture.children[0].src = singlishQuestions[currentQuestion].imgSrc
        } else {
        let img = document.createElement("img");
        img.src = singlishQuestions[currentQuestion].imgSrc
        picture.appendChild(img)
          }
        }
          }
      
          }

