/*As we have seen in earlier examples, objects can contain both nested objects and nested arrays. 
Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.*/

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  console.log(secondTree);