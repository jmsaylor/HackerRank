//epic: find the permutation that would come first in the dictionary

//input: a string
//output: lexicographically smallest ....

function reverseShuffleMerge(s) {
  //unmerge - split the string into two that both contain same letters

  let letterChecker = [];
  let newString = [];

  //create an array the length of alphabet
  for (let x = 0; x < 26; x++) {
    letterChecker.push(false);
  }

  //essentially pushes every other char
  for (let x = 0; x < s.length; x++) {
    const charCode = s[x].charCodeAt() - 97;
    if (!letterChecker[charCode]) {
      newString.push(s[x]);
    }
    letterChecker[charCode] = !letterChecker[charCode];
  }

  //   const newStringReverse = newString.reverse();

  //   console.log(newString);
  //   console.log(newString.reverse());

  // let regular = newString.join();
  // let reverse = newString.reverse().join();
  // console.log(regular);
  // console.log(reverse);


  //shuffle



  //reverse
}

reverseShuffleMerge("eggegg");
reverseShuffleMerge("aeiouuoiea");
reverseShuffleMerge("abcdefgabcdefg");

//   s.split('')reduce((acc, next) => {
//     return [...acc, next];
//   });
