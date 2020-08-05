//the goal: can you create the exact note from the magazine
const magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
const note = ["ive", "got", "some", "coconuts"];

//determine if you can make the note from the magazine (word for word & case-sensitive)
//return a Boolean

function checkMagazine(magazine, note) {
  //checks will be an array of booleans of the results of the index tests for each word in the note
  for (let word = 0; word < note.length; word++) {
    const index = magazine.indexOf(note[word]);
    if (index === -1) {
      console.log("No");
      return "No";
    }
    magazine.splice(index, 1);
  }
  console.log("Yes");
  return "Yes";
}

console.log(checkMagazine(magazine, note));
