// create variables
var availableLetters, 
words, 
answerArray, 
guess, 
lettersGuessed, 
lettersMatched, 
letters, 
numOfWins, 
wins, 
remainingGuesses, 
lives, 
currentWord, 
numLettersMatched, 
messages, 
showDestinationImg;

// create Get Elements for later access
numOfWins = document.getElementById('num-wins');
currentWordDisplay = document.getElementById('current-word');
remainingGuesses = document.getElementById('remaining-guesses');
lettersGuessedDisplay = document.getElementById('letters-guessed');
output = document.getElementById('output');
currentDestinationImage = document.getElementById('destination-picture');
countryNameDisplay = document.getElementById('country-name');


// declare variables when game starts
function setup() {
  availableLetters = "abcdefghijklmnopqrstuvwxyz";
  wins = 0;
  lives = 15;
  answerArray = [];
  lettersGuessedArray = [];
  lettersGuessed = lettersMatched = '';
  numLettersMatched = 0

  // array of word guess
  words = [
    "alabama",
    "alaska",
    "arizona",
    "california",
    "florida",
    "illinois",
    "indiana",
    "maryland",
    "michigan",
    "montana",
    "nevada",
    "newyork",
    "newjersey",
    "ohio",
    "texas",
    "oregon",
    "southcarolina"
  ];

  // create messages to interact with users via output.innerHTML
  messages = {
    start: 'Press any key to get started!',
    win: 'You win!',
    lose: 'Game Over!',
    correct: 'You got it!',
    wrong: 'Try again!',
    guessed: 'Already guessed, please try another word',
    validLetter: 'Please enter a letter from A-Z',
    congrats: "Congratulations! Finished!"
  };

};

// create a function to randomly choose a word with
function newWord() {
  // set values that are displayed on the browser to default
  answerArray = [];
  lettersGuessedArray = [];
  lettersGuessed = lettersMatched = '';
  numLettersMatched = 0

  numOfWins.innerHTML = wins;
  remainingGuesses.innerHTML = lives;
  lettersGuessedDisplay.innerHTML = lettersGuessedArray.join(" ");
  output.innerHTML = messages.start;

  // choose a random word 
  currentWord = words[Math.floor(Math.random() * words.length)];
  console.log("word: " + currentWord);
  console.log(words);

  // create the answer array

  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
  }
  console.log(answerArray);
  currentWordDisplay.innerHTML = answerArray.join(" ");
  gameRound();
};

/* Once the window is loaded, run setup(); and newWord(); to start game */
window.onload = setup();
window.onload = newWord();

function gameRound() {
  // take input from the player
  document.onkeyup = function () {
    
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User guess: " + guess);

   
    if (availableLetters.indexOf(guess) > -1) {
      if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
        output.innerHTML = messages.guessed;
      } else if (currentWord.indexOf(guess) > -1) {
        for (var i = 0; i < currentWord.length; i++) {
          if (currentWord[i] === guess) {
            answerArray[i] = guess;
            console.log("Current answerArray is " + answerArray);
            currentWordDisplay.innerHTML = answerArray.join(" ");
            output.innerHTML = messages.correct;
          }
        }

        for (var j = 0; j < currentWord.length; j++) {
          if (currentWord.charAt(j) === guess) {
            numLettersMatched += 1;
          }
        }

        lettersMatched += guess;
        console.log("Letters Matched: " + lettersMatched);
        if (numLettersMatched === currentWord.length) {
            words.splice(words.indexOf(`${currentWord}`), 1);
            
            showCountryName();
            wins++;
            numOfWins.innerHTML = wins;
            endGame(true);
          }

        

      } else {
        lettersGuessed += guess;
        lettersGuessedArray.push(guess);
        console.log("Letters Guessed: " + lettersGuessed);
        console.log(lettersGuessedArray);
        var letterGuessedUppercase = lettersGuessedArray.map(function toUpper(item) {
          return item.toUpperCase();
        });
        lettersGuessedDisplay.innerHTML = letterGuessedUppercase.join(" ");
        output.innerHTML = messages.wrong;
        lives--;
        remainingGuesses.innerHTML = lives;
        if (lives === 0) {
          endGame(false);
        } else {
          gameRound();
          return;
        }
      }
    } else {
      output.innerHTML = messages.validLetter;
    }
  };
};

// function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function endGame(won) {
  if (won) {
    if (words.length == 0) {
      output.setAttribute("class", "message-congrats");
      output.innerHTML = messages.congrats;
      document.onkeyup = function () {

      }
    } else {
      output.innerHTML = messages.win;
      newWord();
    }

  } else {
    output.setAttribute("class", "message-gameover");
    console.log(capitalizeFirstLetter(currentWord));
    output.innerHTML = messages.lose + " The correct answer was " + capitalizeFirstLetter(currentWord) + ".";
    document.onkeyup = function () {
    }
  }
};

// Display correct answer
function showCountryName() {
  countryName = currentWord;

  switch (countryName) {
    case "alaska":
      console.log("Text alaska");
      countryNameDisplay.innerHTML = 'Alaska';
      break;
    case "arizona":
      console.log("Text arizona");
      countryNameDisplay.innerHTML = 'Arizona';
      break;
    case "california":
      console.log("Text california");
      countryNameDisplay.innerHTML = 'California';
      break;
    case "florida":
      console.log("Text florida");
      countryNameDisplay.innerHTML = 'Florida';
      break;
    case "illinois":
      console.log("Text illinois");
      countryNameDisplay.innerHTML = 'Illinois';
      break;
    case "indiana":
      console.log("Text indiana");
      countryNameDisplay.innerHTML = 'Indiana';
      break;
    case "maryland":
      console.log("Text maryland");
      countryNameDisplay.innerHTML = 'Maryland';
      break;
    case "michigan":
      console.log("Text michigan");
      countryNameDisplay.innerHTML = 'Michigan';
      break;
    case "montana":
      console.log("Text montana");
      countryNameDisplay.innerHTML = 'Montana';
      break;
    case "nevada":
      console.log("Text nevada");
      countryNameDisplay.innerHTML = 'Nevada';
      break;
    case "newyork":
      console.log("Text newyork");
      countryNameDisplay.innerHTML = 'New York';
      break;
    case "newjersey":
      console.log("Text newjersey");
      countryNameDisplay.innerHTML = 'New Jersey';
      break;
    case "ohio":
      console.log("Text ohio");
      countryNameDisplay.innerHTML = 'Ohio';
      break;
    case "texas":
      console.log("Text texas");
      countryNameDisplay.innerHTML = 'Texas';
      break;
    case "oregon":
        console.log("Text oregon");
        countryNameDisplay.innerHTML='Oregon';
        break;
    case "southcarolina":
        console.log("Text southcarolina");
        countryNameDisplay.innerHTML='South Carolina';
        break;
  }
};

