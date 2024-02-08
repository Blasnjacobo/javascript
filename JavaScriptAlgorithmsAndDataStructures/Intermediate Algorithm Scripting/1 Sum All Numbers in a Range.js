/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let newArr = arr.sort(function(a,b) {return a-b});
    let accum = 0;
      for (let i=newArr[0]; i<=newArr[1];i++)
      {
        accum += i;
      }
      return accum;
  }
  
  console.log(sumAll([4, 1]));