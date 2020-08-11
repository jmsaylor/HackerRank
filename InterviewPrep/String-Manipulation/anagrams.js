//epic - find the least amount of deletions between two strings to get anagrams

//i.e. care/car - 1 because e - car/car
// or bike/trike = 3 because b,t,r - ike/ike

//figure out letter counts in each
//add up differences bettween letter counts

function makeAnagram(a, b) {
  let counterA = {};
  let counterB = {};

  counterA = a.split("").reduce((acc, next) => {
    if (acc[next]) {
      acc[next] += 1;
    } else {
      acc[next] = 1;
    }
    return { ...acc };
  }, {});

  counterB = b.split("").reduce((acc, next) => {
    if (acc[next]) {
      acc[next] -= 1;
    } else {
      acc[next] = -1;
    }
    return { ...acc };
  }, counterA);

  //   console.log(counterB);

  let result = 0;

  Object.keys(counterB).forEach((letter) => {
    if (counterB[letter] < 0) {
      result += -1 * counterB[letter];
    } else {
      result += counterB[letter];
    }
  });
  console.log(result);
}

makeAnagram("bob", "boba");
