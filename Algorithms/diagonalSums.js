//epic: return absolute diff of diagonal sums

function diagonalDifference(arr) {
  let result = 0;
  arr.forEach((element, index) => {
    // console.log(element[arr.length - (index + 1)]);
    result += element[index] - element[arr.length - (index + 1)];
  });
  return result < 0 ? -1 * result : result;
}

console.log(
  diagonalDifference([
    [1, 2, 5],
    [1, 4, 3],
    [1, 2, 3],
  ])
);
