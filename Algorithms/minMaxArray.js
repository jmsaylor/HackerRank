function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b);

  console.log(sum - max, sum - min);
}

miniMaxSum([4, 6, 2, 2]);
