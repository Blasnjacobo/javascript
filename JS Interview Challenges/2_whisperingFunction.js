function whispering(str){
    let newStr= "shh.. " + str.toLowerCase();
    str.endsWith("!") ? newStr= newStr.slice(0, -1) : newStr = newStr;
    return(newStr)
}

console.log(whispering("PLEASE STOP SHOUTHING"));
console.log(whispering("MA'AM, this is a Wendy's!"));