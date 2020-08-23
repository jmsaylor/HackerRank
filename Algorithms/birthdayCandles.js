// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  const max = Math.max(...ar);
  const ans = ar.reduce((acc, next) => {
    if (next === max) acc++;
    return acc;
  }, 0);
  console.log(ans);
}

birthdayCakeCandles([0, 0, 1, 1]);
