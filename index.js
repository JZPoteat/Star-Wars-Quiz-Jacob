/**
 * Example store structure
 */
'use strict';
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which Star Wars film was the best?',
      answers: [
        'Clone Wars',
        'Rogue One',
        'Empire Strikes Back',
        'Revenge of the Sith'
      ],
      correctAnswer: 'Empire Strikes Back'
    },
    {
      question: 'Which Star Wars character has the highest Midichlorian count?',
      answers: [
        'Jar Jar Binks',
        'Yoda',
        'Rey',
        'Anakin'
      ],
      
      correctAnswer: 'Anakin'
    },
    {
      question: 'Who are the only two characters to appear in every Star Wars movie episodes?',
      answers: [
        'C3PO and R2D2',
        'Han Solo and Chewbacca',
        'Emperor Palpatine and Darth Vader',
        'Leia Skywalker and Luke Skywalker'
      ],
        
      correctAnswer: 'C3PO and R2D2'
    },
    {
      question: 'What powers a lightsaber?',
      answers: [
        'ION Emitter',
        'Powered by the Force',
        'Kybar Crystal',
        '4 AAA Batteries'
      ],
      
      correctAnswer: 'Kybar Crystal'
    },
    {
      question: 'Whose DNA is used to create the Clone Troopers?',
      answers: [
        'Boba Fett',
        'Jango Fett',
        'Captain Phasma',
        'Finn'
      ],
        
      correctAnswer: 'Jango Fett'
    }

  ],
  selectedAnswers: [],
  imageAlts: ['Entire Skywalker Saga', 'Rey and Kylo Duel', 'AT-AT Battle', 'Atris and Darth Nihilus', 'Darth Revan'],
  quizStarted: false,
  questionNumber: -1,
  //questionNumber: -1 => start page
  //questionNumber: 0-4 => Quiz
  //questionNumber: 5 => end page
  //after questionNumber: 5 => reset questionNumber and
  //score to -1.
  score: 0
};

//Function that handles submitting forms
//changes the display in the DOM
//Checks multiple choice answer
//provide feedback on the answer
//Displays current score
//update image
//update question and answers
//render function

function renderQuizApp() {
  //render the QuizApp in the DOM
  console.log('`renderQuizApp` ran');
  if(store.questionNumber === -1) {
    $('main').html(generateStartPage());
  }
  else if(store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
    $('main').html(generateQuestionAnswerPage());
  }
  else if (store.questionNumber === store.questions.length) {
    $('main').html(generateResultsPage());
  }
}  

function userAnswerSummary () {
  let html = '';
  let i = 0;
  store.questions.forEach(item => {
    html += `<p>${i + 1}.  You selected: ${store.selectedAnswers[i]}. <br>The correct answer:  ${item.correctAnswer}.</p>`;
    i++;
  });
  return html;
}

function handleStartButton() {
  $('main').on('click', '.start-button', event => {
    store.questionNumber++;
    console.log('start button clicked');
    renderQuizApp();
  });
}

function handleSubmitButton() {
  $('main').on('submit', '.answer-form', event => { 
    event.preventDefault();
    checkAnswer();
    console.log(store.score);
    store.questionNumber++;
    //1. get the user's answer
    //2. Compare user's answer to correct answer
    //3. Update the store to reflect if they got it right
    //update questionNumber and score
    renderQuizApp(); 

  });
}

function handleResetButton() {
    
  $('main').on('click', '.reset-button', event => {
    console.log('handlResetButton ran');
    //reset the questionNumber
    //reset the score
    //reload the page.
    //reset the selectedAnswers array
    //render the quiz app
    store.questionNumber = -1;
    store.score = 0;
    store.selectedAnswers = [];
    console.log(store.score);
    renderQuizApp();
  });
}


function generateStartPage() {
  console.log('generateStartPage runs');
  return `<h1>Welcome to our Star Wars quiz!</h1>
            <img src="quizImage-1.jpg" alt="Darth Nihilus">
            <p>May the Force be with you</p>
            <button type="button" class="start-button">Begin!</button>
    `;
}

function generateQuestionAnswerPage() {
  console.log('generateQuestionAnswerPage runs');
  let numberOfQuestions = store.questions.length;
  let possibleAnswers = store.questions[store.questionNumber].answers;
  let answersHTML = '';
  let feedback = `<h2></h2>`;
  if(store.questionNumber !== 0) {
    feedback = `<h2>${provideFeedback()}</h2>
                <h3>Your current score is ${store.score} out of ${numberOfQuestions}</h3>`;
  }
  possibleAnswers.forEach(choice =>
  {
    answersHTML += `<div>
            <input required class="answer" type="radio" name='answers' value='${choice}'>
            <label for='${choice}'>${choice}</label>
        </div>`;
  });
  let currentScore = `Your current score is ${store.score} out of ${numberOfQuestions}`;
  console.log(store.imageAlts[store.questionNumber]);
  return `
  ${feedback}
  <img src="quizImage${store.questionNumber}.jpg" alt="${store.imageAlts[store.questionNumber]}">
  <section id="current-question">${store.questionNumber + 1}. ${store.questions[store.questionNumber].question}
  </section>
  <form class ="answer-form">
    <section>${answersHTML}</section>
    <button type="submit">Submit</button>
  </form>`;
}



function generateResultsPage() {
  console.log('generateResultsPage runs');
  let summary = userAnswerSummary();
  return `
    <p>Congrats! You got ${store.score} out of ${store.questions.length} correct!</p>
    <img src="resultPageImage.jpg" alt="Mandalore the Ultimate">
    ${summary}<button type="button" class="reset-button">Restart Quiz
    </button>`;
}
function checkAnswer() {
  //Function will check if the answer the user 
  //submits matches the correct answer, and update
  //the score accordingly
  console.log('`checkAnswer` ran');
  let userAnswer = $(".answer:checked").val();
  store.selectedAnswers.push(userAnswer);
  let answerIndex = store.questionNumber;
  let currentCorrectAnswer = store.questions[answerIndex].correctAnswer;
  if(userAnswer === currentCorrectAnswer) {
    store.score++;
  }
}

function provideFeedback() {
  //Returns a string that tells the user if they 
  //answered correctly or displays the correct answer
  //if answered incorrectly
  let userAnswer = $(".answer:checked").val();
  let previousAnswerIndex = store.questionNumber - 1;
  let currentCorrectAnswer = store.questions[previousAnswerIndex].correctAnswer;
  //console.log(userAnswer);
  //console.log(store.questionNumber);  
  if (userAnswer === currentCorrectAnswer) {
    return 'Correct!';
  }
  else {
    return `Incorrect.  The correct answer is ${currentCorrectAnswer}.`
  }
  console.log('`provideFeedback` ran');
}


function handleQuizApp() {
  //This function is calling the event functions
  renderQuizApp();
  handleStartButton();
  handleSubmitButton();
  handleResetButton();
}


$(handleQuizApp);
/**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, 
   * that regenerates the view each time the store is 
   * updated. 
   * See your course material, consult your instructor,
   *  and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the 
   * index.html file.
   *
   * You may add attributes (classes, ids, etc) to the 
   * existing HTML elements, or link stylesheets or 
   * additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF 
   * FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
/********** TEMPLATE GENERATION FUNCTIONS **********/
  
// These functions return HTML templates
  
/********** RENDER FUNCTION(S) **********/
  
// This function conditionally replaces the contents
// of the <main> tag based on the state of the store
  
/********** EVENT HANDLER FUNCTIONS **********/
  
// These functions handle events (submit, click, etc)



            