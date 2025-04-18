// Bootstrap Form Validation from the contact-us.html
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
setTimeout(() => {
  document.getElementById("placeholder-card").style.display = "none";
  document.getElementById("real-card").style.display = "block";
}, 2000);
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
} /* 
Sources:
https://stackoverflow.com/questions/15404890/jquery-check-if-button-is-clicked
https://learn.jquery.com/using-jquery-core/selecting-elements/
https://www.w3schools.com/jquery/event_off.asp
Using location.reload(); to start new game: https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
setTimeout instructions: https://www.sitepoint.com/jquery-settimeout-function-examples/

Medium Article: 
https://medium.com/front-end-hacking/tic-tac-toe-javascript-game-b0cd6e98edd9

*/

// TO DO:
// check for draws

// Create game object
var game = {
  first: true,
  user: "",
  computer: "",
  currentPlayer: "",
  moves: 1,
};

$(document).ready(function () {
  var squares = $("td");
  $("#reset").hide();
  var winner = false;
  // assign characters to player & computer
  $("#btnX, #btnO").click(function () {
    // if player chooses X
    if (this.id == "btnX") {
      game.player = "X";
      game.computer = "O";
      $("#playerStatus").html(
        "\
        <h4>Player is " +
          game.player +
          "</h4>\
        <h4>Computer is " +
          game.computer +
          "</h4>"
      );
      squares.click(function () {
        currentPlayer = game.player;
        if ($(this).text() === "X" || $(this).text() === "O") {
          $("#character").html("This space is taken. Please choose another.");
        } else {
          $(this).text("X");
          game.moves++;
          //console.log($(this).attr("id"));
          $(this).off("click");
          checkWin();
          //setTimeout(computerTurn, 1000);
          computerTurn();
        }
      });
    } else if (this.id == "btnO") {
      // if player chooses O

      game.player = "O";
      game.computer = "X";
      $("#playerStatus").html(
        "\
            <h4>Player is " +
          game.player +
          "</h4>\
            <h4>Computer is " +
          game.computer +
          "</h4>"
      );
      squares.click(function () {
        currentPlayer = game.player;
        if ($(this).text() === "X" || $(this).text() === "O") {
          $("#character").html("This space is taken. Please choose another.");
        } else {
          $(this).text("O");
          game.moves++;
          //console.log($(this).attr("id"));
          $(this).off("click");
          checkWin();
          //setTimeout(computerTurn, 1000);
          computerTurn();
        }
      });
    } // end of char assignments
  });

  // check for win
  function checkWin() {
    // CHECK TO SEE IF PLAYER WON
    if (
      $("#one").text() === game.player &&
      $("#two").text() === game.player &&
      $("#three").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#four").text() === game.player &&
      $("#five").text() === game.player &&
      $("#six").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#seven").text() === game.player &&
      $("#eight").text() === game.player &&
      $("#nine").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#one").text() === game.player &&
      $("#four").text() === game.player &&
      $("#seven").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#two").text() === game.player &&
      $("#five").text() === game.player &&
      $("#eight").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#three").text() === game.player &&
      $("#six").text() === game.player &&
      $("#nine").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#one").text() === game.player &&
      $("#five").text() === game.player &&
      $("#nine").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    } else if (
      $("#three").text() === game.player &&
      $("#five").text() === game.player &&
      $("#seven").text() === game.player
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.player + " won!");
    }

    // CHECK TO SEE IF COMPUTER WON
    if (
      $("#one").text() === game.computer &&
      $("#two").text() === game.computer &&
      $("#three").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#four").text() === game.computer &&
      $("#five").text() === game.computer &&
      $("#six").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#seven").text() === game.computer &&
      $("#eight").text() === game.computer &&
      $("#nine").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#one").text() === game.computer &&
      $("#four").text() === game.computer &&
      $("#seven").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#two").text() === game.computer &&
      $("#five").text() === game.computer &&
      $("#eight").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#three").text() === game.computer &&
      $("#six").text() === game.computer &&
      $("#nine").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#one").text() === game.computer &&
      $("#five").text() === game.computer &&
      $("#seven").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    } else if (
      $("#three").text() === game.computer &&
      $("#five").text() === game.computer &&
      $("#seven").text() === game.computer
    ) {
      $("h1").html("GAME OVER");
      $("h3").text(game.computer + " won!");
    }
    winner = true;
    gameOver();
  }

  // automate computer plays
  function computerTurn() {
    currentPlayer = game.computer;
    // find an open square
    if (
      $("#one").text() !== game.player &&
      $("#one").text() !== game.computer
    ) {
      $("#one").text(game.computer);
      $(this).off("click");
    } else if (
      $("#two").text() !== game.player &&
      $("#two").text() !== game.computer
    ) {
      $("#two").text(game.computer);
      $(this).off("click");
    } else if (
      $("#three").text() !== game.player &&
      $("#three").text() !== game.computer
    ) {
      $("#three").text(game.computer);
      $(this).off("click");
    } else if (
      $("#four").text() !== game.player &&
      $("#four").text() !== game.computer
    ) {
      $("#four").text(game.computer);
      $(this).off("click");
    } else if (
      $("#five").text() !== game.player &&
      $("#five").text() !== game.computer
    ) {
      $("#five").text(game.computer);
      $(this).off("click");
    } else if (
      $("#six").text() !== game.player &&
      $("#six").text() !== game.computer
    ) {
      $("#six").text(game.computer);
      $(this).off("click");
    } else if (
      $("#seven").text() !== game.player &&
      $("#seven").text() !== game.computer
    ) {
      $("#seven").text(game.computer);
      $(this).off("click");
    } else if (
      $("#eight").text() !== game.player &&
      $("#eight").text() !== game.computer
    ) {
      $("#eight").text(game.computer);
      $(this).off("click");
    } else if (
      $("#nine").text() !== game.player &&
      $("#nine").text() !== game.computer
    ) {
      $("#nine").text(game.computer);
      $(this).off("click");
    }
    game.moves++;
    checkWin();
  }

  function gameOver() {
    if ($("h1").html() == "GAME OVER") {
      $("#btnX, #btnO").hide();
      $("#reset").show();
    }

    // get Board ready for new game
    $("#reset").click(function () {
      clearBoard();
    });
  }

  // function to clear squares when reset button pushed
  function clearBoard() {
    window.location.reload(true);
  }
}); // end of $(document).ready(function())

const dishes = [
  { name: "Sushi", cuisine: "Japanese" },
  { name: "Tacos", cuisine: "Mexican" },
  { name: "Pasta Carbonara", cuisine: "Italian" },
  { name: "Butter Chicken", cuisine: "Indian" },
  { name: "Croissant", cuisine: "French" },
];

const cuisines = ["Japanese", "Mexican", "Italian", "Indian", "French"];
let currentDish = null;
const dishDisplay = document.getElementById("dishDisplay");
const buttonsDiv = document.getElementById("buttons");
const feedback = document.getElementById("feedback");

function getRandomDish() {
  return dishes[Math.floor(Math.random() * dishes.length)];
}

function getRandomCuisines(correctCuisine) {
  let options = [correctCuisine];
  while (options.length < 3) {
    let randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
    if (!options.includes(randomCuisine)) {
      options.push(randomCuisine);
    }
  }
  // Shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function startRound() {
  currentDish = getRandomDish();
  dishDisplay.textContent = currentDish.name;
  feedback.textContent = "";
  buttonsDiv.innerHTML = "";

  let options = getRandomCuisines(currentDish.cuisine);
  for (let option of options) {
    let button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    buttonsDiv.appendChild(button);
  }
}

function checkAnswer(selectedCuisine) {
  if (selectedCuisine === currentDish.cuisine) {
    feedback.textContent = "Correct! Nice job!";
  } else {
    feedback.textContent = "Wrong! Try again.";
  }
  setTimeout(startRound, 1000); // New round after 1 second
}

startRound();
