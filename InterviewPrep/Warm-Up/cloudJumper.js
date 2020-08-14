function jumpingOnClouds(c) {
  let minJumps = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      //   console.log(i, "double");
      minJumps++;
      i += 1;
    } else if (c[i + 1] === 0) {
      minJumps++;
    } else {
      return minJumps;
      //   console.log(minJumps);
    }
  }
}

jumpingOnClouds([0, 0, 0, 0, 1, 0]);
