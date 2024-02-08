import products from "./data.mjs";

/*
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/


function getSaleItems(data){
    return data
    .filter((item) => item.type === 'sweet')
    .map((candy) => {
        return {
        item: candy.item,
        price: candy.price
        }
    })
};

console.log(getSaleItems(products))