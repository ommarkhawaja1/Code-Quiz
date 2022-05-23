var startButton = document.querySelector(".start-btn");
var questionContainerElement = document.querySelector("#question-container");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector(".answer-buttons")
let shuffledQuestions, currentQuestionIndex
var timer;


//  attaching an event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()

    timerCount = 40;
    startTimer();

};


function startTimer() {
    // sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);

};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: "How do we enclose an HTML tag",
        choices: ["{}", "()", "<>", "[]"],
        correctAnswer: "<>"
    },

    {
        question: "How do we enclose an HTML tag",
        choices: ["{}", "()", "<>", "[]"],
        correctAnswer: "<>"
    },

]
