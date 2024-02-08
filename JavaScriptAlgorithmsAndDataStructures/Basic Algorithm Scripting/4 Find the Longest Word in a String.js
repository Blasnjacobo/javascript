/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let SplitWord = str.split(" ");
    console.log(SplitWord);
    let max=0;
    for (let i=0; i < SplitWord.length; i++){
      console.log(SplitWord[i].length);
      if (SplitWord[i].length > max)
      max = SplitWord[i].length;
    }
    return max;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));