/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [
      {
        question: 'What color is broccoli?',
        answers: [
          'red',
          'orange',
          'pink',
          'green'
        ],
        correctAnswer: 'green'
      },
      {
        question: 'What is the current year?',
        answers: [
          '1970',
          '2015',
          '2019',
          '2005'
        ],
        correctAnswer: '2019'
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



            