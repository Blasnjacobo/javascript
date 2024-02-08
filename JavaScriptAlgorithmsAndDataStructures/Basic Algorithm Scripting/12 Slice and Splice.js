/*
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

                                            //SOLVING THIS PROBLEM USING SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    //SLICE: I am copying every element of second array
    for (let i=0; i<arr1.length; i++){
      newArr.splice(n, 0, arr1[i]);
      //SPLICE: I AM INSERTING EVERY ELEMENT OF arr2 into arr1
      //n: starting point, 0: How many element are you removing, what are you adding instead.
      n++;
    }
  
    return newArr;
  }
  
  //let new_text = older.replace("incorrect", "correct");
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



  
                                                        //A DIFFERENT WAY TO SOLVE THIS PROBLEM

  /*function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }*/




                                               //A LONG WAY TO SOLVE THIS PROBLEM USING CONSECUTIVE FOR

/* function frankenSplice(arr1, arr2, n) {
    let newArr = [];
    let accum = 0;
    for (let i=0; i<n;i++){
      newArr.push(arr2[i]);
      accum++;
      console.log(newArr);
    }
    for (let j=0; j<arr1.length;j++){
      newArr.push(arr1[j]);
      console.log(newArr);
    }
    for (let z=accum; z<arr2.length;z++){
      newArr.push(arr2[z]);
    }
  
    return newArr;
  }
  
  //let new_text = older.replace("incorrect", "correct");
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); */