function getMaxStreaks(toss) {
  let headStreak = 1,
    tailStreak = 1,
    headMaxStreak = 1,
    tailMaxStreak = 1;
  console.log("why");
  for (let x = 1; x < toss.length; x++) {
    if (toss[x] == "Heads" && toss[x - 1] == "Heads") {
      headStreak += 1;
    } else if (toss[x] == "Heads" && toss[x - 1] == "Tails") {
      headStreak = 1;
    }
    if (toss[x] == "Tails" && toss[x - 1] == "Tails") {
      tailStreak += 1;
    } else if (toss[x] == "Tails" && toss[x - 1] == "Heads") {
      tailStreak = 1;
    }
    if (headStreak > headMaxStreak) {
      headMaxStreak = headStreak;
    }
    if (tailStreak > tailMaxStreak) {
      tailMaxStreak = tailStreak;
    }
    if (toss.indexOf("Heads") == -1) {
      headMaxStreak = 0;
    }
    if (toss.indexOf("Tails") == -1) {
      tailMaxStreak = 0;
    }
  }

  // Return an array of two integers containing the maximum streak of heads and tails respectively
  return [headMaxStreak, tailMaxStreak];
}
console.log(getMaxStreaks(["Heads", "Heads", "Heads"]));
