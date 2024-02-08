Y/*ou can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop. */

const myArray = [];
let i = 5;
while (i >= 0){
  myArray.push(i);
  i--;
  }
  console.log(myArray);