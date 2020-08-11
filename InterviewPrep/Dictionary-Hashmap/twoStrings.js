//epic: Determine if s1 and s2 share a common substring & return 'YES' or 'NO'.

//input: two string (s1 and s2)
//output: "YES" or "NO"

//IF - s1 and s2 share at least one letter
// true - return 'YES'
// ELSE
// return 'NO'

function twoStrings(s1, s2) {
  //   s1 = s1.split("");
  //   s2 = s2.split("");

  for (let x = 0; x < s1.length; x++) {
    if (s2.indexOf(s1[x]) >= 0) {
      return "YES";
    }
  }

  return "NO";
}

// console.log(twoStrings("xyz", "abc"));
// console.log(twoStrings("food", "world"));

function twoStrings2(str1, str2) {
  set1 = new Set(str1);
  set2 = new Set(str2);

  set1 = [...set1];

  for (let x = 0; x < set1.length; x++) {
    if (set2.has(set1[x])) {
      return "YES";
    }
  }
  return "NO";
}

// console.log(twoStrings2("dog", "doggie"));
// console.log(twoStrings2("abc", "xyz"));

function test() {
  console.time("Set: ");
  twoStrings2(
    "xvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvb",
    "tytytytytytytytytytytytytytytytytytytytytyb"
  );
  console.timeEnd("Set: ");
  console.time("String: ");
  twoStrings(
    "xvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvb",
    "tytytytytytytytytytytytytytytytytytytytytyb"
  );
  console.timeEnd("String: ");
}

test();
