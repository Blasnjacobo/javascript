/*
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    let newArr = [];
      return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("The_Andy_Griffith_Show"));