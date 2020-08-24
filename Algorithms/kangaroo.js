// Complete the kangaroo function below.
// function kangaroo(x1, v1, x2, v2) {
//   for (let i = 0; i <= 1000; i++) {
//     if (x2 + v2 * i === x1 + v1 * i) return "YES";
//   }
//   return "NO";
// }

function kangaroo(x1, v1, x2, v2) {
  if ((v2 > v1 && x2 > x1) || (v1 > v2 && x1 > x2)) {
    return "NO";
  } else {
    return (x1 - x2) % (v2 - v1) === 0 ? "YES" : "NO";
  }
}

const ans = kangaroo(15, 3, 9, 3);

console.log(ans);
