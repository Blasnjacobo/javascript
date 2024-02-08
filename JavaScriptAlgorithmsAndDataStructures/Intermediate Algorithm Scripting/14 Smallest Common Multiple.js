/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

function smallestCommons(arr) {
    //GETTING AN ARRAY 
    function getArray(arr){
    let newArr= [];
    newArr = arr.sort((a, b) => b - a);
    for (let i=arr[1]+1; i<arr[0];i++) newArr.push(i);
    newArr.sort(function(a, b){return b - a});
    return newArr;
    }
    let newArr = [];
    newArr= getArray(arr);
    //CHECKING MULTIPLE
    function every(arr){
      //console.log(arr);
      let multiplier = 1;
      let max = 0;
      let variable = true;
      do{
        console.log(arr);
        console.log(multiplier++);
        max = arr[0] * multiplier; 
        console.log("max: "+ max);
        variable = arr.every(
          value => (max % value) === 0)
          console.log(variable);
           }while(variable === false)
          console.log(max);
          return max;
    }
    return every(newArr);
  }
  
  console.log(smallestCommons([1, 5]));