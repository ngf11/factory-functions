//closures

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name  ${gameName} your score ${score} `;
  };
}

const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");

console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());
console.log(soccerGame());
console.log(soccerGame());
console.log(soccerGame());
