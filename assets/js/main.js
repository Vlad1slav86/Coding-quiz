var timeLeftEl = document.querySelector('#timeLeft');
var headingEl = document.querySelector('#hesding');
var contentEl = document.querySelector('#content');
var startBtnEl = document.querySelector('#start');
var timer;

var question = [
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

var timeLeft = 60;
var indexOfCurrentQuestion = 0;

function renderNextQuestion(question) {
    document.querySelector('main').innerHTML = '';
    
    var questionContainerEl = document.createElement('div');

    var titleEl = document.createElement('h2');
    titleEl.textContent = question.title;
    questionContainerEl.appendChild(titleEl);

    for (var i = 0; i < question.choices.length; i++) {
        var optionEl = document.createElement('button');
        optionEl.textContent = question.choices[i];
        questionContainerEl.appendChild(optionEl);
    }

    document.querySelector('main').appendChild(questionContainerEl);
}

renderNextQuestion(question[0]);
renderNextQuestion(question[1]);
renderNextQuestion(question[2]);
renderNextQuestion(question[3]);
renderNextQuestion(question[4]);

startBtnEl.addEventListener('click', function (event) {
    event.preventDefault();

    timer = setInterval(function () {
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
        
        if (timeLeft === 0) {
            //TODO Build the rest of game logic
            clearInterval(timer);
        }
    }, 100);
});

/*function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}

setTime();*/