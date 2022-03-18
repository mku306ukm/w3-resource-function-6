//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(str) {
  var longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}
console.log(
  findLongestWord("I have a aeroplane")
);
