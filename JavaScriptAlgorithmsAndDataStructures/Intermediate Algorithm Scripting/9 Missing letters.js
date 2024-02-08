/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let value = str.charCodeAt(0);
    for(let i=0;i<str.length;i++)
    {
      const charCode = str.charCodeAt(i);
      if (String.fromCharCode(charCode) != String.fromCharCode(value)){
        String.fromCharCode(value);
        return String.fromCharCode(value);}
      value++;
    }
    return console.log(undefined);
  }
  
  console.log(fearNotLetter("abce"));