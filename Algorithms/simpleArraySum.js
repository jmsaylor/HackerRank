//sum the array

function simpleArraySum(ar) {
  return ar.reduce((acc, next) => {
    return (acc += next);
  }, 0);
}

console.log(simpleArraySum([1, 2, 3]));
