/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
    //NO CHANGES
    console.log(after.match(/^[A-Z]/));
 if ((before.match(/^[A-Z]/) == null && after.match(/^[A-Z]/)) == null)     return str.replace(before, after);
    //BEFORE CAPITAL CASE
    if ((before.match(/^[A-Z]/) != null)){
    console.log("hola");
 let newCharB = before.match(/^[A-Z]/)[0];
 let newAf = "";
 if (newCharB === newCharB.toUpperCase()) {
        newAf = after[0].toUpperCase() + after.substring(1);
        return str.replace(before, newAf);}}
    //AFTER CAPITAL CASE
 let newCharA = before.match(/^[a-z]/)[0];
 console.log("hola");
 let newBf = "";
 if (newCharA === newCharA.toLowerCase()) {
   newBf = after[0].toLowerCase() + after.substring(1);
   return str.replace(before, newBf);}
}
console.log(myReplace("I think we should look up there", "up", "Down"));
//console.log(myReplace("His name is Tom", "Tom", "john"))
//console.log(myReplace("Let us go to the store", "store", "mall"));