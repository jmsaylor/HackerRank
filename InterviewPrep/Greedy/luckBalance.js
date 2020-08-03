//the idea is to have as much luck as possible after all the contests
//winning contests subtracts and losing contests add to the luck balance
//we must calculate the optimal luck balance based on the below

//k is the total allowed losses to important games
//contests is a 2d array where contests[x][0] is luck impact of winning/losing
//and contests[x][1] is 0 or 1 for unimportant and important, respectively

//we can lose all unimportant games to add to our balance
//then find the top k luck impacts and lose those to minimize impact on luck balance

function luckBalance(k, contests) {
  let luckBalance = 0;
  const arr = [];

  //add unimportant games to balance or separate important to new array
  contests.forEach((contest) => {
    contest[1] === 0 ? (luckBalance += contest[0]) : arr.push(contest[0]);
  });

  //sort the array
  arr.sort((a, b) => a - b);

  //lose top k
  for (let x = 0; x < k; x++) {
    const value = arr.pop();
    luckBalance += value;
  }

  //we are forced to win the rest of the games
  const sum = arr.reduce((a, b) => a + b);
  luckBalance -= sum;
  //win the rest
  console.log(luckBalance);
  return luckBalance;
}

luckBalance(1, [
  [4, 1],
  [6, 0],
  [5, 1],
  [2, 1],
]);
