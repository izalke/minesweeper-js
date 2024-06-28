// Funkcja do generowania pustej planszy
const generateClearBoard = (height, width) => {
  let board = [];

  for (let i = 0; i < height; i++) {
    board[i] = [];
    for (let j = 0; j < width; j++) {
      board[i][j] = 0;
    }
  }
  return board;
};
// Funkcja do losowego wybierania liczby od 0 do max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Funkcja do umieszczania bomb na planszy
const populateBoardWithMines = (board, noBombs) => {
  if (board.length == 0) {
    return;
  }
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  let bombCount = 0;
  while (bombCount != noBombs) {
    let x = getRandomInt(board[0].length); // losowy x
    let y = getRandomInt(board.length); // losowy y
    if (board[y][x] == 0) {  // sprawdzenie, czy w tym miejscu nie ma bomby
      board[y][x] = -1;
      bombCount++;
    }
  }
};

// Funkcja do rysowania planszy na stronie
const drawBoard = (board) => {
  const container = document.getElementById("game-container");
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = document.createElement("div");
      cell.id = `${i}-${j}`;
      cell.classList.add("boardStyle");
      if (board[i][j] === -1) {
        cell.classList.add("bomb");
      }
      container.appendChild(cell);
    }
  }
};

// Generowanie i rysowanie planszy
const mineSweeperBoard = generateClearBoard(10, 10);
console.log(mineSweeperBoard);
populateBoardWithMines(mineSweeperBoard, 10);
drawBoard(mineSweeperBoard);
