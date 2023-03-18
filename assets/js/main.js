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