function altCaps(str){
    let newArr = str.split("");
    for(let i=0; i<str.length;i++){
        i % 2 == 0 ? newArr[i] = str[i].toUpperCase() : newArr[i] = str[i].toLowerCase(); 
    }
    newArr = newArr.join("")
    return newArr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));