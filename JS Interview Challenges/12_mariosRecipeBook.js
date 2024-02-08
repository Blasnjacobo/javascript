/*
Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. */

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
    return arr.filter(function(item, pos){
        return arr.indexOf(item) == pos;
    })}

console.log(removeDupesFromArray(eggScrambleRecipe));