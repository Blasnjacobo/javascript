/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    console.log(str);
    let newString = str.split(" ");
    console.log(newString);
    let finalArr = [];
    for (let i=0; i < newString.length; i++){
      let str2 = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
      let result = str2[0]+str2.slice(1).toLowerCase();
      console.log(result);
      finalArr.push(result);
    }
      let finalisima = finalArr.join(" ");
    return finalisima;
  }
  
  //console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));