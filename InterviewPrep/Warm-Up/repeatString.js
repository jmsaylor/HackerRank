//epic: find how many occurences of 'a' within n given a

//s = the repeated string
//n = number of chars to consider

function repeatedString(s, n) {
  const countA = (acc, next) => {
    if (next === "a") {
      acc++;
    }
    return acc;
  };

  s = s.split();

  let letterA = s.split("").reduce(countA, 0);

  const whole = Math.floor(n / s.length);

  letterA = whole * letterA;

  const remainder = n % s.length;

  const sliced = s.slice(0, remainder);

  letterA = sliced.split("").reduce(countA, letterA);

  console.log(letterA);
}

repeatedString("aba", 100);
