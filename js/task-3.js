function findLongestWord(string = "") {
  // Write code under this line
  const arrayWords = string.split(" ");
  let longestWord = " ";
  for (const arrayWord of arrayWords) {
    if (arrayWord.length > longestWord.length) {
      longestWord = arrayWord;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'