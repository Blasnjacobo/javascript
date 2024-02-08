/*
Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  */

const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    return chars.split("").filter(function(item, pos) {
        return chars.indexOf(item) == pos;
    }).join("");
}

console.log(removeDupeChars(password));