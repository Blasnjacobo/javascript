/* Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received. 
Example output: The winner is 🐈 cats with 19 votes! */

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    let maxValue = 0;
    let maxTeam = "";
    for (const food in obj) {
        if (obj[food] >= maxValue){
            maxValue = obj[food];
            maxTeam = food;
        }
    }
    return `The winner is ${maxTeam} with ${maxValue} votes!`
}
console.log(findTheWinner(gameNightFood));