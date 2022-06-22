var guesses = [];
var players = {};

function successMess(name) {
  if (name in players) {
    var difference = Math.abs(players[name] - guesses.length);
    if (difference > 0) {
      return `That’s Correct ${name}! And you beat your previous attempt by ${difference} fewer guesses! `;
    } else {
      return `That’s Correct ${name}! You did better in your last game by ${difference} fewer guesses.`;
    }
  } else {
    if (guesses.length > 1) {
      return `Correct ${name}! Your previous guesses were ${guesses.join(
        ", "
      )}!`;
    } else {
      return `Correct ${name}! You got it in one guess!`;
    }
  }
}

function play() {
  var secretNum = Math.floor(Math.random() * 10);
  var name = prompt("what is your name?");
  while (true) {
    var input = prompt("gues a number");
    if (input === null) break;
    var number = Number(input);
    if (Number.isNaN(number)) {
      alert("Invalid input. Please guess an integer value.");
      continue;
    }
    guesses.push(number);

    if (number === secretNum) {
      alert(successMess(name));
      players[name] = guesses.length;
      var playAgain = prompt("Play again?");
      if (playAgain.toLowerCase() === "yes") {
        guesses = [];
        play();
      } else {
        break;
      }
    } else if (number < secretNum) {
      alert(`Sorry, ${name}, guess higher`);
    } else {
      alert(`Sorry, ${name}, guess lower`);
    }
  }
}
play();
