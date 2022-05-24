var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn");
var questionContainerElement = document.querySelector("#question-container");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons");
var shuffledQuestions, currentQuestionIndex;
var timer;


//  attaching an event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

    timerCount = 40;
    startTimer();

};


function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);

};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
            console.log(question.correct)
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
} else {
    startButton.innerText.remove("hide")
    startButton.classList.remove("hide")
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

var questions = [
    {
        question: "How do we enclose an HTML tag",
        answers: [ 
            { text: "{}", correct: false },
            { text: "()", correct: false },
            { text: "<>", correct: true },
            { text: "[]", correct: false},
        ]
    },

    {
        question: "How do you create an ordered list in HTML",
        answers: [ 
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<href>", correct: false },
            { text: "<main>", correct: false},
        ]
    },

    {
        question: "Which of these tools would NOT make a request to an API endpoint?",
        answers: [ 
            { text: "The browser", correct: false },
            { text: "The DevTools Network tab", correct: true },
            { text: "The Fetch API", correct: false },
            { text: "The curl command", correct: false},
        ]
    },    {
        question: "What is the correct HTML for making a radio button?",
        answers: [ 
            { text: "<radio>", correct: false },
            { text: "<radiobutton>", correct: false },
            { text: "<input type='radiobutton'>", correct: false },
            { text: "<input type='radio'>", correct: true},
        ]
    },    {
        question: "Which Moment.js method would help us get how many days away a date is?",
        answers: [ 
            { text: ".isAfter()", correct: false },
            { text: ".auditTask()", correct: false },
            { text: "Math.abs(moment().isBefore()-moment().isAfter())", correct: false },
            { text: ".diff", correct: true},
        ]
    },
]


