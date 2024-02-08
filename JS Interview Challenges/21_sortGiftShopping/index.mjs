import products from "./data.mjs";

/*
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

function sortProducts(data){
    return data.sort((a,b) => {
        return (a.price - b.price)
    });
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);