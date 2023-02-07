// Get computer's move for game
function getComputerChoice() {
  // Randomly choose 0, 1 or 2
  // Return corresponding move as string
  switch(Math.floor(Math.random() * 3)) {
    case 0: return 'Rock';
    case 1: return 'Paper';
    case 2: return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // Handle all ties
  if (playerSelection === computerSelection) {
    return 'Tie';
  }

  // Handle all wins/losses
  // Combine both plays into a single string for easy case comparison
  switch (playerSelection + ' ' + computerSelection) {
    // All win cases
    case 'Rock Scissors':
    case 'Paper Rock':
    case 'Scissors Paper':
      return 'Win';
    // All loss cases
    case 'Scissors Rock':
    case 'Paper Rock':
    case 'Rock Paper':
      return 'Loss';
    // Incorrect input
    default:
      return 'Error!';
  }
}

// Forces string into used capitalization format,
// First letter uppercase, remaining lowercase
// Used for player input
function forceCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}