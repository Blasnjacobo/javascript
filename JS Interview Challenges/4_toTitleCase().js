function capitalizeWord(word){
    return word
    .substring(0,1).toUpperCase().concat(word.slice(1));
}

function toTitleCase(str){
    return arr = str.split(" ").map(key => capitalizeWord(key)).join(" ");
}


console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));