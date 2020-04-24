/**
 * Example store structure
 */
'use strict';
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which Star Wars film was the best one?',
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
      question: 'Who are the only two characters to appear in every Star Wars movie?',
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
        question: 'Whose DNA is used to create the Clones Troopers?',
        answers: [
          'Boba Fett',
          'Jango Fett',
          'Captain Phasma',
          'Finn'
        ],
        
        correctAnswer: 'Jango Fett'
      }

  ],
  quizStarted: false,
  questionNumber: 0,
  //questionNumber: 0 => start page
  //questionNumber: 1-5 => Quiz
  //questionNumber: 6 => end page
  //after questionNumber: 6 => reset questionNumber and
  //score to 0.
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
  const quizForm = '<p>apples</p>';
  $('main').html(quizForm);

}  


function handleSubmitAnswer() {
  //function will contain event functions that we 
  //need to access when the user submits an answer
  console.log('`handleSubmitAnswer` ran');
  let numberOfQuestions = store.questions.length;
  console.log(numberOfQuestions);
  if(store.questionNumber === 0) {
    //this is the start page

  }
  else if(store.questionNumber > 0 && store.questionNumber <= numberOfQuestions) {
    //this is the quiz section
  }

  else if(store.questionNumber === numberOfQuestions + 1) {
    //This is the results page
  }
  else {
    //This is where we restart the quiz
  }
}

function updateDisplay() {
  //function will update what is being rendered
  //in the DOM
  console.log('`updateDisplay` ran');
}

function checkAnswer() {
  //Function will check if the answer the user 
  //submits matches the correct answer, and update
  //the score accordingly
  console.log('`checkAnswer` ran');
}

function provideFeedback() {
  //Returns a string that tells the user if they 
  //answered correctly or displays the correct answer
  //if answered incorrectly
  console.log('`provideFeedback` ran');
}

function displayScore() {
  //Returns a string that gives the user's current
  //score
  console.log('`displayScore` ran');
}

function updateImage() {
  //Updates the image displayed in the DOM
  console.log('`updateImage` ran');
}

function updateQuestionsAnswers() {
  //Updates the questions and answers displayed
  //in the DOM
  console.log('`displayScore` ran');
}






function handleQuizApp() {
  //This function is calling the event functions
  renderQuizApp();
  handleSubmitAnswer();
  updateDisplay();
  checkAnswer();
  provideFeedback();
  displayScore();
  updateImage();
  updateQuestionsAnswers();


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



            