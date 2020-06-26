function getStrength([...password], weight_a) {
  let total = 0;
  const range = (start, end) => {
    let range = [];
    for (let x = start; x <= end; x++) {
      range.push(x);
    }
    return range;
  };
  const alphabet = [...String.fromCharCode(...range(97, 122))];
  let weights = [...range(0, 25)];
  parseInt(...weights, 10);
  weights = weights.map(x => x + weight_a);
  weights = weights.map(x => (x > 25 ? x - 26 : x));
  console.log(weights);

  password.forEach(element => {
    total += weights[alphabet.indexOf(element)];
  });

  return total;
}
console.log(getStrength("hellomrz", 2));
