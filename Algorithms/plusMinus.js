//epic: print percentage of negative, zero, and positive numbers to 6 digit precision

function plusMinus(arr) {
  let ans = arr.reduce(
    (acc, next) => {
      if (next < 0) {
        acc.neg++;
      } else if (next > 0) {
        acc.pos++;
      } else {
        acc.zer++;
      }
      return acc;
    },
    { neg: 0, zer: 0, pos: 0 }
  );

  console.log((ans.pos / arr.length).toFixed(6));
  console.log((ans.neg / arr.length).toFixed(6));
  console.log((ans.zer / arr.length).toFixed(6));
}

plusMinus([-2, 0, 1]);
