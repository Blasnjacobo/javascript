/*If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays.
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.*/
function multiplyAll(arr) {
    let product = 1;
    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr[i].length; j++){
            //console.log(arr[i][j]);
            product *= arr[i][j];
            //console.log(product);
;        }
  }
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
