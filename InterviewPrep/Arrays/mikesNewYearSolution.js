function minimumBribes(line) {
  let isTooChaotic = false;
  //check if more than 2 bribes have been made
  for (let i = 0; i < line.length; i++) {
    const bribes = i + 1 - line[i];
    if (bribes < -2) {
      console.log("Too chaotic");
      isTooChaotic = true;
      break;
    }
  }
  //if no more than 2 bribes have been made for each person, run modified bubblesort counter
  if (!isTooChaotic) console.log(bubbleSortCount(line));
}

//bubblesort that counts number of swaps
function bubbleSortCount(array) {
  let count = 0;
  for (let i = array.length; i >= 0; i--) {
    //inner loop stops after 2 passes because 3 swaps is not allowed
    for (let j = i; j >= Math.max(0, i - 2); j--) {
      console.log("i:", i, " j:", j);
      if (array[j] > array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
        count++;
      }
    }
  }
  return count;
}

bubbleSortCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
