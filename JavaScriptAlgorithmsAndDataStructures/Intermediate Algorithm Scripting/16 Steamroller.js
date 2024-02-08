/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    const hola = [].concat(...arr)
  
    const flat = [].concat(...arr);
    console.log(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));