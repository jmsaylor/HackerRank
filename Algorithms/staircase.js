function staircase(n) {
  const string = [];

  while (string.length < n - 1) {
    string.push(" ");
  }

  for (let i = n - 1; i >= 0; i--) {
    string[i] = "#";
    console.log(string.join(""));
  }
}

staircase(6);
