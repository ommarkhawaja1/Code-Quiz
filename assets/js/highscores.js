var clearButton = document.querySelector(".clear-btn");
//get item allEntries from localstorage 
var highscores = JSON.parse(localStorage.getItem("highScores"));

// if entries exist, print them on the screen in list format
if (highscores) {
    console.log(highscores.length)
  for (i = 0; i < highscores.length; i++) {
    var userList = document.querySelector("#highscores")
    var input = document.createElement('li'); 
    input.textContent = highscores[i]['name'] + "   ---   " + highscores[i]['score']
    userList.appendChild(input)
  }
}

function clearHighscores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
  }
  
  clearButton.addEventListener("click", clearHighscores)