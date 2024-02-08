const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", ]

function reverseString(title){
   return title.split("").reverse().join("");
}


function reverseStringsInArray(arr){
    return arr.map(element => reverseString(element));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));