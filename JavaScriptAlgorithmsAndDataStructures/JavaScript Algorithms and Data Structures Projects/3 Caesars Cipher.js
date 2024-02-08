/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    let newArr = [];
    let convertString="";
    for (let i=0;i<str.length;i++)
    {
      let initialCharCodeAt = str[i].charCodeAt();
      let finalCharCodeAt = initialCharCodeAt + 13;
      if (initialCharCodeAt >= 65 && initialCharCodeAt <= 90){
        { 
          if (finalCharCodeAt > 90)
          {
            finalCharCodeAt = finalCharCodeAt - 26;
          }
          convertString = String.fromCharCode(finalCharCodeAt);
          }
        newArr.push(convertString); 
      } else {
          newArr.push(str[i]);
    }
    convertString = newArr.join('');
    }
    return convertString;
  }
  console.log(rot13("SERR CVMMN!"));