function alternatingCharacters(s) {
  let counter = 0;

  for (let x = 0; x < s.length - 1; x++) {
    s[x] === s[x + 1] ? counter++ : null;
  }

  return counter;
}

alternatingCharacters("AABB");
