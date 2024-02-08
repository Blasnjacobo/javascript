/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

function reverseString(str) {
    let StrSplit = str.split('');
    console.log(StrSplit);
    let StrReverse = StrSplit.reverse();
    console.log(StrReverse);
    let StrJoin = StrReverse.join('');
    return StrJoin;
    //return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello"));