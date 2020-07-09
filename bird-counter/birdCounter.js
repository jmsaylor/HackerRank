const birdCounter = (arr) => {
  //counts of types of birds. currently 5 types
  let typeCounts = [0, 0, 0, 0, 0],
    currentMax = 0,
    maxId = 0;

  arr.forEach((bird, i, original) => {
    typeCounts[original[i] - 1]++;
  });

  typeCounts.forEach((count, i) => {
    if (count > currentMax) {
      currentMax = count;
      maxId = i + 1;
    }
  });
  return maxId;
};

console.log(birdCounter([1, 1]));
