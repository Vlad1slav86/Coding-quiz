const timeLeftEl = document.querySelector('#timeLeft');
const headingEl = document.querySelector('#heading');
const contentEl = document.querySelector('#content');
const startBtnEl = document.querySelector('#start');
let timer;

const questions = [
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
    {
        title:
            'String values must be enclosed within ___ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
        'Commonly used data types DO NOT include:',
        choices: [ 'strings', 'alerts', 'booleans', 'numbers'],
        answer: 'alerts',
    },
    {
        title:
        'The first index of an array is ____.',
        choices: ['0', '1', '2', 'any'],
        answer: '0',
    },
    {
        title:
        'The condition in an if / else statement is enclosed within _______.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'parentheses',

    }
];

let timeLeft = 60;
let indexOfCurrentQuestion = 0;
let currentScore = 0;

function renderNextQuestion() {
    contentEl.textContent = '';
    const currentQuestion = questions[indexOfCurrentQuestion];

    headingEl.textContent = currentQuestion.title;

    const numChoices = currentQuestion.choices.length;
    for (let i = 0; i < numChoices; i++) {
        const buttonEl = document.createElement('button');
        buttonEl.className = 'choices';
        buttonEl.textContent = currentQuestion.choices[i];
        contentEl.appendChild(buttonEl);
    }
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoreList = document.querySelector('#high-score-list');
    
    // Clear any existing scores from the list
    highScoreList.innerHTML = '';
  
    // Loop through each high score and add it to the list as a new list item
    highScores.forEach(score => {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.initials}: ${score.score}`;
      highScoreList.appendChild(listItem);
    });
  }
  

function endGame() {
    clearInterval(timer);
    contentEl.innerHTML = '';

    const resultEl = document.createElement('p');
    resultEl.textContent = `Your final score is ${currentScore} out of ${questions.length}.`;
    contentEl.appendChild(resultEl);

    const formEl = document.createElement('form');
    const labelEl = document.createElement('label');
    labelEl.textContent = 'Enter your initials:';
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('maxlength', '3');
    inputEl.setAttribute('size', '3');
    const submitBtnEl = document.createElement('button');
    submitBtnEl.textContent = 'Submit';
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(submitBtnEl);
    contentEl.appendChild(formEl);

    submitBtnEl.addEventListener('click', (event) => {
        event.preventDefault();
        const initials = inputEl.value.toUpperCase();
        if (initials) {
            const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
            highScores.push({ initials, score: currentScore });
            highScores.sort((a, b) => b.score - a.score);
            highScores.splice(5);
            localStorage.setItem('highScores', JSON.stringify(highScores));
            displayHighScores();
        }
    });
}


startBtnEl.addEventListener('click', (event) => {
    event.preventDefault();

    timer = setInterval(() => {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    renderNextQuestion();
});

contentEl.addEventListener('click', (event) => {
    const currentQuestion = questions[indexOfCurrentQuestion];
    event.preventDefault();

    if (event.target.matches('.choices')) {
        if (event.target.textContent === currentQuestion.answer) {
            currentScore++;
        } else {
            timeLeft -= 10;
        }

        indexOfCurrentQuestion++;

        if (indexOfCurrentQuestion >= questions.length) {
            clearInterval(timer);
            endGame();
        } else {
            renderNextQuestion();
        }
    } 
});


const restartBtnEl = document.querySelector('#restart');

restartBtnEl.addEventListener('click', () => {
  timeLeft = 60;
  indexOfCurrentQuestion = 0;
  currentScore = 0;
  renderNextQuestion();
  timer = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
});