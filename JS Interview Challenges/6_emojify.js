const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    let newWord = word.substring(1,word.length-1);
    let regex = /^[::$]/
    if (regex.test(word) && emojis[newWord] != undefined) 
    {
    word = newWord;
    return emojis[word];
    } else if (regex.test(word) && emojis[newWord] == undefined){
    return word = newWord;
    } else
    return word;
}

function emojifyPhrase(phrase){
    let arr = "";
    return arr=phrase.split(" ").map(element => emojifyWord(element)).join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));


console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
