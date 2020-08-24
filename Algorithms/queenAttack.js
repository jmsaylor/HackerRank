// Complete the queensAttack function below.
// function queensAttack(n, k, r_q, c_q, obstacles) {
//   let counter = 0;
//   const board = [];
//   const checks = {
//     n: false,
//     ne: false,
//     e: false,
//     se: false,
//     s: false,
//     sw: false,
//     w: false,
//     nw: false,
//   };
//   for (let i = 0; i < n; i++) {
//     board.push([]);
//     for (let j = 0; j < n; j++) {
//       board[i].push("_");
//     }
//   }

//   board[r_q][c_q] = "Q";

//   if (obstacles) {
//     obstacles.forEach((obstacle) => {
//       board[obstacle[0]][obstacle[1]] = "X";
//     });
//   }

//   let left = c_q - 1;
//   let straight = c_q;
//   let right = c_q + 1;
//   //north

//   for (let i = r_q - 1; i >= 0; i--) {
//     if (checks.nw === true) {
//     } else if (board[i][left] !== "X" && left >= 0) {
//       board[i][left] = "o";
//       counter++;
//     } else if (board[i][left] === "X") {
//       checks.nw = true;
//     }
//     if (checks.n === true) {
//     } else if (board[i][straight] !== "X") {
//       board[i][straight] = "o";
//       counter++;
//     } else if (board[i][straight] === "X") {
//       checks.n = true;
//     }
//     if (checks.ne === true) {
//     } else if (board[i][right] !== "X" && right < n) {
//       board[i][right] = "o";
//       counter++;
//     } else if (board[i][right] === "X") {
//       checks.ne = true;
//     }
//     left -= 1;
//     right += 1;
//   }

//   left = c_q - 1;
//   straight = c_q;
//   right = c_q + 1;

//   for (let i = r_q + 1; i < n; i++) {
//     if (checks.sw === true) {
//     } else if (board[i][left] !== "X" && left >= 0) {
//       board[i][left] = "o";
//       counter++;
//     } else if (board[i][left] === "X") {
//       checks.sw = true;
//     }
//     if (checks.s === true) {
//     } else if (board[i][straight] !== "X") {
//       board[i][straight] = "o";
//       counter++;
//     } else if (board[i][straight] === "X") {
//       checks.s = true;
//     }
//     if (checks.se === true) {
//     } else if (board[i][right] !== "X" && right < n) {
//       board[i][right] = "o";
//       counter++;
//     } else if (board[i][right] === "X") {
//       checks.se = true;
//     }
//     left -= 1;
//     right += 1;
//   }

//   left = c_q - 1;
//   right = c_q + 1;

//   for (let i = c_q - 1; i >= 0; i--) {
//     if (checks.w === true) {
//     } else if (board[r_q][i] !== "X") {
//       board[r_q][i] = "o";
//       counter++;
//     } else if (board[r_q][i] === "X") {
//       checks.w = true;
//     }
//   }

//   for (let i = c_q + 1; i < n; i++) {
//     if (checks.e === true) {
//     } else if (board[r_q][i] !== "X") {
//       board[r_q][i] = "o";
//       counter++;
//     } else if (board[r_q][i] === "X") {
//       checks.e = true;
//     }
//   }
//   return counter;
//   console.log(counter);
// }

// queensAttack(5, 2, 3, 5, [
//   [2, 2],
//   [3, 1],
// ]);

function queensAttack(n, k, r_q, c_q, obstacles) {
  let counter = 0;
  const board = [];
  const checks = {
    n: false,
    ne: false,
    e: false,
    se: false,
    s: false,
    sw: false,
    w: false,
    nw: false,
  };
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push("_");
    }
  }

  board[r_q][c_q] = "Q";

  if (obstacles) {
    obstacles.forEach((obstacle) => {
      board[obstacle[0]][obstacle[1]] = "X";
    });
  }

  let left = c_q - 1;
  let straight = c_q;
  let right = c_q + 1;
  //north

  for (let i = r_q - 1; i >= 0; i--) {
    if (checks.nw === true) {
    } else if (board[i][left] !== "X" && left >= 0) {
      board[i][left] = "o";
      counter++;
    } else if (board[i][left] === "X") {
      checks.nw = true;
    }
    if (checks.n === true) {
    } else if (board[i][straight] !== "X") {
      board[i][straight] = "o";
      counter++;
    } else if (board[i][straight] === "X") {
      checks.n = true;
    }
    if (checks.ne === true) {
    } else if (board[i][right] !== "X" && right < n) {
      board[i][right] = "o";
      counter++;
    } else if (board[i][right] === "X") {
      checks.ne = true;
    }
    left -= 1;
    right += 1;
  }

  left = c_q - 1;
  straight = c_q;
  right = c_q + 1;

  for (let i = r_q + 1; i < n; i++) {
    if (board[i][left] === "X") {
      break;
    } else if (board[i][left] !== "X" && left < n) {
      board[i][left] = "o";
      counter++;
    }

    left -= 1;
  }

  for (let i = r_q + 1; i < n; i++) {
    if (board[i][straight] === "X") {
      break;
    } else if (board[i][straight] !== "X") {
      board[i][straight] = "o";
      counter++;
    }
  }

  //
  for (let i = r_q + 1; i < n; i++) {
    if (board[i][right] === "X") {
      break;
    } else if (board[i][right] !== "X" && right < n) {
      board[i][right] = "o";
      counter++;
    }
    right += 1;
  }

  left = c_q - 1;
  right = c_q + 1;

  for (let i = c_q - 1; i >= 0; i--) {
    if (checks.w === true) {
    } else if (board[r_q][i] !== "X") {
      board[r_q][i] = "o";
      counter++;
    } else if (board[r_q][i] === "X") {
      checks.w = true;
    }
  }

  for (let i = c_q + 1; i < n; i++) {
    if (checks.e === true) {
    } else if (board[r_q][i] !== "X") {
      board[r_q][i] = "o";
      counter++;
    } else if (board[r_q][i] === "X") {
      checks.e = true;
    }
  }
  console.log(board);
  console.log(counter);
  return counter;
}

queensAttack(5, 2, 2, 3, [
  [3, 2],
  [1, 3],
]);
