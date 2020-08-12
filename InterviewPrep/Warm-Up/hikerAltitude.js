//epic: count how many valleys the hiker traversed

//n is the number of steps taken in the hike
//s is a string describing those steps w/ U for up and D for down

//valleys are denoted by stretches of altitude values below 0

function countingValleys(n, s) {
  const hikeLog = [];
  let altitude = 0;
  let valleyCount = 0;
  for (let x = 0; x < s.length; x++) {
    s[x] === "U" ? altitude++ : altitude--;
    hikeLog.push(altitude);
    if (altitude === 0) {
      if (hikeLog[x - 1] < 0) {
        valleyCount++;
      }
    }
  }
  console.log(hikeLog);
  return valleyCount;
}

function countingValleys2(n, s) {
  const hike = s.split("").reduce(
    (acc, next, index) => {
      next === "U" ? acc.currentAltitude++ : acc.currentAltitude--;
      acc.log.push(acc.currentAltitude);
      if (acc.currentAltitude === 0 && acc.log[index - 1] < 0) {
        acc.valleyCount++;
      }
      return { ...acc };
    },
    {
      log: [],
      currentAltitude: 0,
      valleyCount: 0,
    }
  );
  return hike.valleyCount;
}

console.log(countingValleys2(null, "UUDDDUUUDDDDUUDDDUUUUDDD"));
