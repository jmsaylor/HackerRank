//create arrays
//find mins
//find max of mins

const riddle = (arr) => {
  const n = arr.length;
  console.log(n);
  let windows = {};

  for (let x = 0; x < arr.length; x++) {
    windows[x + 1] = [];
  }

  console.log(windows);

  for (let i = 0; i < arr.length; i++) {
    console.log("index: ", i);
    for (let windowSize = 1; windowSize <= arr.length; windowSize++) {
      if (i + windowSize <= arr.length) {
        const windo = Math.min(...arr.slice(i, i + windowSize));
        windows[windowSize].push(windo);
      }
    }
  }
  console.log(windows);
  const maxNums = Object.keys(windows).map((win) => {
    return Math.max(...windows[win]);
  });

  return maxNums;
};

console.log(riddle([1, 7, 3, 13, 5]));
