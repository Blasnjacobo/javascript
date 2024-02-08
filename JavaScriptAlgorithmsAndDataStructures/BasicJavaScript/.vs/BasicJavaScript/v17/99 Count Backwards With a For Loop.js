/*A for loop can also count backwards, so long as we can define the right conditions.
In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.
Push the odd numbers from 9 through 1 to myArray using a for loop.*/

const myArray = [];
for (let i=9; i >= 1; i-=2){
  myArray.push(i);
  }
console.log(myArray);
