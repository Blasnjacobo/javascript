/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let truncStr= str.substring(0,num);
    console.log(num);
    console.log(truncStr.length);
    if (str.length>num){
    let finalStr = truncStr + "...";
    return finalStr;}
    else return truncStr;
  }
  
  //console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));