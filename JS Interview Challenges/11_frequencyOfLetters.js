/*
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1} */

function countChars(str){
const obj = {};
const newstr= str.toLowerCase().split(" ").join("");
for(let i=0;i<newstr.length;i++)
    !obj[newstr[i]] ? obj[newstr[i]] = 1 : obj[newstr[i]] +=1;
return obj;
}

console.log(countChars("Peggy Porth"));