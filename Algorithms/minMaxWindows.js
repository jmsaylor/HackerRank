//create arrays
//find mins
//find max of mins

const riddle = (arr) => {
  let windows = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("index: ", i);
    for (let windowSize = arr.length - i; windowSize >= 1; windowSize--) {
      if (windowSize === 1) continue;
      if (i === 0) windows[windowSize] = [];
      console.log(windowSize);
      windows[windowSize].push(Math.min(...arr.slice(i, i + windowSize)));
    }
    if (windows[windows.length - (i + 1)]) {
      windows[windows.length - (i + 1)] = Math.max(
        ...windows[windows.length - (i + 1)]
      );
    }
  }

  windows.shift();
  windows[0] = Math.max(...arr);
  return windows;
};

const riddle2 = (arr) => {
  let windows = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
    for (let windowSize = arr.length - i; windowSize >= 1; windowSize--) {
      if (windowSize === 1) continue;
      if (i === 0) windows[windowSize] = [];
      // console.log(windowSize);
      windows[windowSize].push(Math.min(...arr.slice(i, i + windowSize)));
    }
    if (windows[windows.length - (i + 1)]) {
      windows[windows.length - (i + 1)] = Math.max(
        ...windows[windows.length - (i + 1)]
      );
    }
  }

  windows.shift();
  windows[0] = max;
  return windows;
};

console.time("with");
riddle([1, 7, 3, 13, 5]);
console.timeEnd("with");

console.time("without");
riddle2([1, 7, 3, 13, 5]);
console.timeEnd("without");

const riddle_reduce = (arr) => {
  windows = arr.reduce((acc, next, index) => {
    
  },{

  })
}
