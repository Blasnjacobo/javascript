/*For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
Push the odd numbers from 1 through 9 to myArray using a for loop.*/
const myArray = [];

for (let i=1; i<=9; i +=2){
  myArray.push(i);
}
console.log(myArray);