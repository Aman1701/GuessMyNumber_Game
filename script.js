"use strict";

// Reading the content of the HTML
// console.log(document.querySelector(".message").textContent);

//Manipulating hte Content of the HTML
// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 100;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number");
  } else if (guess === secret_number) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secret_number;

    //When player wins; manipulating CSS
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //DRY principle
  else if (guess !== secret_number) {
    if (score > 1) {
      displayMessage(guess > secret_number ? "Too high" : "Too low");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game !!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > secret_number) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too high";
  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game !!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secret_number) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too low";
  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You lost the game !!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

//Reset the game on clicking Again button

document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start Guessing.....";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
