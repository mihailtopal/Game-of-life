let place;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const rows = Math.floor(screenHeight / 20);
const cols = Math.floor(screenWidth / 20);
place = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => 0)
);

function sumSosediArray(place, x, y, sumSosedi = 0) {
  if (x === 0 && y === 0) {
    //левый верхний угол
    sumSosedi = place[x + 1][y + 1] + place[x + 1][y] + place[x][y + 1];
  }
  if (x === place.length - 1 && y === place.length - 1) {
    //правый нижний угол
    sumSosedi = place[x - 1][y - 1] + place[x - 1][y] + place[x][y - 1];
  }
  if (x === 0 && y === place.length - 1) {
    //правый верхний угол
    sumSosedi = place[x + 1][y] + place[x][y - 1] + place[x + 1][y - 1];
  }
  if (x === place.length - 1 && y === 0) {
    // левый нижний угол
    sumSosedi = place[x - 1][y] + place[x][y + 1] + place[x - 1][y + 1];
  }

  if (x > 0 && y > 0 && x !== place.length - 1 && y !== place.length - 1) {
    //в центре
    sumSosedi =
      place[x + 1][y + 1] +
      place[x - 1][y - 1] +
      place[x + 1][y] +
      place[x - 1][y] +
      place[x][y + 1] +
      place[x][y - 1] +
      place[x + 1][y - 1] +
      place[x - 1][y + 1];
  }
  if (x > 0 && y === 0 && x !== place.length - 1) {
    //сверху но не в углу
    sumSosedi =
      place[x + 1][y + 1] +
      place[x + 1][y] +
      place[x - 1][y] +
      place[x][y + 1] +
      place[x - 1][y + 1];
  }
  if (x === 0 && y > 0) {
    //слева но не в углу
    sumSosedi =
      place[x + 1][y + 1] +
      place[x + 1][y] +
      place[x][y + 1] +
      place[x][y - 1] +
      place[x + 1][y - 1];
  }
  if (x === place.length - 1 && y > 0 && y !== place.length - 1) {
    //справо но не в углу
    sumSosedi =
      place[x - 1][y - 1] +
      place[x - 1][y] +
      place[x][y + 1] +
      place[x][y - 1] +
      place[x - 1][y + 1];
  }
  if (x > 0 && y === place.length - 1 && x !== place.length - 1) {
    //снизу но не в углу
    sumSosedi =
      place[x + 1][y + 1] +
      place[x - 1][y - 1] +
      place[x + 1][y] +
      place[x - 1][y] +
      place[x][y + 1] +
      place[x][y - 1] +
      place[x + 1][y - 1] +
      place[x - 1][y + 1];
  }
  return sumSosedi;
}
let gameInterval;
function displayBoard() {
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";

  for (let x = 0; x < place.length - 13; x++) {
    const row = document.createElement("tr");

    for (let y = 0; y < place[x].length; y++) {
      const cell = document.createElement("td");
      cell.className = place[x][y] === 1 ? "alive" : "dead";
      cell.addEventListener("click", () => toggleCell(x, y));
      row.appendChild(cell);
    }

    gameBoard.appendChild(row);
  }
}
displayBoard();
function toggleCell(row, col) {
  place[row][col] = place[row][col] === 1 ? 0 : 1;
  displayBoard();
}
// Функция для запуска игры
function startGame() {
  gameInterval = setInterval(evolve, 250);
}
function random() {
  place = place.map((row) => row.map(() => Math.round(Math.random())));
  displayBoard();
}
function stopGame() {
  clearInterval(gameInterval);
}

function clearBoard() {
  place = place.map((row) => row.map(() => 0));
  displayBoard();
}
function goGlaid() {
  let vector = Math.floor(Math.random() * 5);
  let randomPositionY = Math.floor(
    Math.random() *
      (place.length > place[0].length ? place[0].length : place.length)
  );
  let randomPositionX = Math.floor(
    Math.random() *
      (place.length > place[0].length ? place[0].length : place.length)
  );
  if (vector % 4 === 0) {
    place[randomPositionY][randomPositionX] = 1;
    place[randomPositionY + 1][randomPositionX + 1] = 1;
    place[randomPositionY + 2][randomPositionX] = 1;
    place[randomPositionY + 2][randomPositionX + 1] = 1;
    place[randomPositionY + 1][randomPositionX + 2] = 1;
  }
  if (vector % 4 === 1) {
    place[randomPositionY][randomPositionX] = 1;
    place[randomPositionY][randomPositionX + 1] = 1;
    place[randomPositionY + 1][randomPositionX + 1] = 1;
    place[randomPositionY + 1][randomPositionX + 2] = 1;
    place[randomPositionY - 1][randomPositionX + 2] = 1;
  }
  if (vector % 4 === 2) {
    place[randomPositionY][randomPositionX] = 1;
    place[randomPositionY + 1][randomPositionX] = 1;
    place[randomPositionY + 1][randomPositionX + 1] = 1;
    place[randomPositionY + 2][randomPositionX + 1] = 1;
    place[randomPositionY][randomPositionX + 2] = 1;
  }
  if (vector % 4 === 3) {
    place[randomPositionY][randomPositionX] = 1;
    place[randomPositionY][randomPositionX + 2] = 1;
    place[randomPositionY + 1][randomPositionX + 2] = 1;
    place[randomPositionY + 1][randomPositionX + 1] = 1;
    place[randomPositionY + 2][randomPositionX + 1] = 1;
  }
  displayBoard();
}

function evolve() {
  const newPlace = place.map((row) => [...row]);

  for (let x = 0; x < newPlace.length; x++) {
    for (let y = 0; y < newPlace[0].length; y++) {
      if (newPlace[x][y] === 1) {
        let sumSosedi = sumSosediArray(place, x, y);
        if (sumSosedi !== 2 && sumSosedi !== 3) {
          newPlace[x][y] = 0;
        }
      }
      if (newPlace[x][y] === 0) {
        let sumSosedi = sumSosediArray(place, x, y);
        if (sumSosedi === 3) {
          newPlace[x][y] = 1;
        }
      }
    }
  }

  place = newPlace;
  displayBoard();
}

displayBoard();
