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
  let arr = [];

  console.log(contests);

  //add unimportant games to balance or separate important to new array
  contests.forEach((contest) => {
    if (contest[1] === 0) {
      luckBalance += contest[0];
    } else {
      arr.push(contest[0]);
    }
  });

  console.log(luckBalance);

  arr = arr.sort((a, b) => b - a);

  console.log(arr);

  arr.forEach((element, index) => {
    // console.log(element, index);
    if (index < k) {
      luckBalance += element;
    } else {
      luckBalance -= element;
    }
  });
  console.log(luckBalance);
  return luckBalance;
}

luckBalance(1, [
  [4, 1],
  [6, 0],
  [5, 1],
  [2, 1],
]);

luckBalance(3, [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
]);
