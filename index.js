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

function getPlayerChoice() {
  // Prompt player for play until correct value
  let playerChoice = prompt('Rock, Paper, Scissors', 'Rock');

  // Force capitalization rules so player input can ignore case
  playerChoice = forceCase(playerChoice.trim());
  
  return playerChoice;
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
      return 'Error';
  }
}

// Call from console to play defined number of rounds
function game() {
  const numOfRounds = 5;
  let wins = 0;
  let ties = 0;

  // Play rounds for defined game length
  // Track wins and ties and print output
  for(let i = 0; i < numOfRounds; i++ ) {
    
    // Get moves from player and computer and record result
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    let result = playRound(player, computer);
    
    // Report results to console and record wins and ties
    console.log(`You played: ${player}. Computer played: ${computer}`);
    switch (result) {
      case 'Win':
        console.log('You won!');
        wins++;
        break;
      case 'Loss':
        console.log('You loss!');
        break;
      case 'Tie':
        console.log('You tied!')
        ties++;
        break;
      case 'Error':
        console.error('Invalid input for playRound()');
        break;
      default:
        console.error('Something went wrong.');
    }
  }

  // Report round info to player
  console.log('Game Over!')
  console.log(`Wins: ${wins} Losses: ${numOfRounds - wins - ties} Ties: ${ties}`);
}

// Forces string into used capitalization format,
// First letter uppercase, remaining lowercase
// Used for player input
function forceCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}