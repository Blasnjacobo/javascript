function panic(str){
    return str
    .split(" ")
    .join(" 😱")
    .toUpperCase() + "!";
}



console.log(panic("Winter is coming"));
console.log(panic("I'm almost out of coffee"));