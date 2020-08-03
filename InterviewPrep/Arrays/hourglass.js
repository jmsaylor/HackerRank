//the goal is to find the largest hourglass sum
// hourglass shape
// ###
//  #
// ###

const exampleInput = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

//iterate through the 2D array
//find the values in all the hourglass shapes
//sum those values - put them in new array
//find the largest sum among them

function hourglassSum(arr) {
  const sumList = [];

  for (let rowIndex = 0; rowIndex <= arr.length - 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex <= arr.length - 3; columnIndex++) {
      const hourglass = [
        ...arr[rowIndex].slice(columnIndex, columnIndex + 3),
        ...arr[rowIndex + 1].slice(columnIndex + 1, columnIndex + 2),
        ...arr[rowIndex + 2].slice(columnIndex, columnIndex + 3),
      ];

      const hourglassSum = hourglass.reduce((a, b) => a + b);

      sumList.push(hourglassSum);
    }
  }

  const largestHourglassSum = sumList.reduce(
    (max, element) => (element > max ? element : max),
    sumList[0]
  );

  return largestHourglassSum;
}

hourglassSum(exampleInput);
