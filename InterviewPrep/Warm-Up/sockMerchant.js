//epic: figure out how many pairs of socks you have
//n is total number of socks
// ar is an array and each element denotes the kind of sock

function sockMerchant(n, ar) {
  //   console.log(ar);
  const counter = ar.reduce((acc, next) => {
    acc[next] ? (acc[next] += 1) : (acc[next] = 1);
    return { ...acc };
  }, {});
  //   console.log(counter);
  const socks = Object.keys(counter).reduce((acc, next) => {
    // console.log(typeof next);
    return acc + Math.floor(parseInt(counter[next], 10) / 2);
  }, 0);

  return socks;
}

console.log(sockMerchant(null, [1, 1, 2]));
