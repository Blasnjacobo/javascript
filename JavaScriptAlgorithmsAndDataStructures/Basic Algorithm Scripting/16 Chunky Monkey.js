/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let accum = 0;
    let newArr = [];
    for (let i=0; i<(arr.length/size); i++){
     newArr.push(arr.slice(0+accum,size+accum))
     accum += size;
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));