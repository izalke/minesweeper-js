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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const populateBoardWithMines = (board, noBombs) => {
  if (board.length == 0) {
    return;
  }
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  let bombCount = 0;
  while (bombCount != noBombs) {
    let x = getRandomInt(board[0].length);
    let y = getRandomInt(board.length);
    if (board[x][y] == 0) {
      board[x][y] = -1;
      bombCount++;
    }
  }
};

const drawBoard = (board) => {
  const container = document.getElementById("game-container");
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = document.createElement("div");
      cell.id = "${i}-{j}";
      cell.classList.add("boardStyle");
      container.appendChild(cell);
    }
  }
};

const mineSweeperBoard = generateClearBoard(10, 10);
console.log(mineSweeperBoard);
populateBoardWithMines(mineSweeperBoard, 10);
drawBoard(mineSweeperBoard);
