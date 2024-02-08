import shoppingCart from "./data.mjs";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44389877777777
*/

function total(arr){
    const initialValue=0
    return arr
    .reduce((callback, value) => callback + value.price, initialValue)
    .toFixed(2)
}

console.log(total(shoppingCart));