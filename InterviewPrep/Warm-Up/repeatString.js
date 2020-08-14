//title: INFINITE STRING

//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

//epic: find how many occurences of the letter 'a' within n chars of the infinite string given s

//s = the repeated string
//n = number of chars to consider

function repeatedString(s, n) {
  const countA = (acc, next) => {
    if (next === "a") {
      acc++;
    }
    return acc;
  };

  s = s.split("");

  let letterA = s.reduce(countA, 0);

  const whole = Math.floor(n / s.length);

  letterA = whole * letterA;

  const remainder = n % s.length;

  const sliced = s.slice(0, remainder);

  letterA = sliced.reduce(countA, letterA);

  console.log(letterA);
}

repeatedString("aba", 100);
