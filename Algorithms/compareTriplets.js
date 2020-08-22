// a & b are arrays of triplets, they are scores of two players
//Decide who wins (based on rules) and return a tally

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.

function compareTriplets(a, b) {
  const results = a.reduce(
    (acc, next, index) => {
      //   console.log(b[index]);
      if (next > b[index]) {
        acc[0]++;
      } else if (next < b[index]) {
        acc[1]++;
      }
      return acc;
    },
    [0, 0]
  );
  return results.join(" ");
}

console.log(compareTriplets([3, 3, 3], [2, 2, 2]));
