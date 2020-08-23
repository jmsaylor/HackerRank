// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push("_");
    }
  }

  board[r_q][c_q] = "Q";

  obstacles.forEach((obstacle) => {
    board[obstacle[0]][obstacle[1]] = "X";
  });

  const distances = {
    n: 0,
    ne: 0,
    e: 0,
    se: 0,
    s: 0,
    sw: 0,
    w: 0,
    nw: 0,
  };

  console.log(board);
}

queensAttack(5, 2, 1, 1, [
  [2, 2],
  [3, 1],
]);
