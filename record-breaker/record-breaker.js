// Input Format
// The first line contains an integer , the number of games.
// The second line contains  space-separated integers describing the respective values of
//Output Format
//Print two space-seperated integers describing the respective numbers of times her best (highest)
//score increased and her worst (lowest) score decreased.
// Complete the breakingRecords function below.
function breakingRecords(scores) {
  const counter = {
    max: {
      current: 0,
      breaksRecord: 0,
    },
    min: {
      current: 0,
      breaksRecord: 0,
    },
  };

  counter.max.current = counter.min.current = scores[0];

  scores.forEach((score) => {
    if (score > counter.max.current) {
      counter.max.current = score;
      counter.max.breaksRecord++;
    } else if (score < counter.min.current) {
      counter.min.current = score;
      counter.min.breaksRecord++;
    }
  });

  return [counter.max.breaksRecord, counter.min.breaksRecord];
}

console.log(breakingRecords([10, 20, 32, 9, 8]));
