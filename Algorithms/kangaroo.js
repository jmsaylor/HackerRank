// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  for (let i = 0; i <= 1000; i++) {
    if (x2 + v2 * i === x1 + v1 * i) return "YES";
  }
  return "NO";
}

const ans = kangaroo(0, 3, 4, 2);

console.log(ans);
