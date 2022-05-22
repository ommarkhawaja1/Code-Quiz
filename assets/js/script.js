var startButton = document.querySelector(".start_btn");
var timerElement = document.querySelector(".timer_count");
var question = document.querySelector(".question");
var timer;


var questions = [
    { question: "How do we enclose an HTML tag",
    choices: ["{}", "()", "<>", "[]"],
    correctAnswer: "<>"},

    { question: "How do we enclose an HTML tag",
    choices: ["{}", "()", "<>", "[]"],
    correctAnswer: "<>"},
    
]

//  attaching an event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

function startGame() {
    timerCount = 40;
    startTimer()
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

    }

