/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
    if (bool === true || bool === false)
    return true;
    else return false;
    //return typeof bool === "boolean";
  }
  
  console.log(booWho(1));