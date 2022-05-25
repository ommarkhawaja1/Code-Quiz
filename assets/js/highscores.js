var liTag = document.createElement("li")
var username = document.querySelector("#username")
var saveScoreBtn = document.querySelector("#submit-btn")
var finalScore = document.querySelector("#finalScore")
var mostRecentScore = localStorage.getItem("finalScore")
var clearHighscores = document.querySelector(".clear")

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

var finalScore = JSON.parse(localStorage.getItem(finalScore));
console.log(localStorage)

function saveHighScore() {

    var score = {
        score: mostRecentScore,
        name: username.value
    }

    highscores.push(score)

    highscores.sort(function (a, b) {
        return b.score - a.score;
      });

    highscores.splice(5)
    
    localStorage.setItem("highScores", JSON.stringify(highscores))

    highscores.forEach(function (score) {
        // Create li tag for each Score and displaying score on page/li
        var liTag = document.createElement("li");
        liTag.textContent = score.name + " you scored - " + score.score;
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);

        // one for name and one for score
      });
    }

saveHighScore()

document.getElementById("clear").onclick = clearHighscores;


// create a for loop for items from localstorage and display it here