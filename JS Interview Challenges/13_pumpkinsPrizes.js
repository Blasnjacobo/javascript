//Write a function to flatten nested arrays of strings or numbers into a single array.

//console.log(arr.flat(Infinity));

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    return arr.flat();
}

function manualFlatten(arr){
    let newArr = [];
    arr.forEach(element => {
        if (Array.isArray(element)){
            element.forEach(item => newArr.push(item))
        } else newArr.push(element);
    });
    return newArr;
}

console.log(flatten(kittyPrizes));
console.log(manualFlatten(kittyScores));
