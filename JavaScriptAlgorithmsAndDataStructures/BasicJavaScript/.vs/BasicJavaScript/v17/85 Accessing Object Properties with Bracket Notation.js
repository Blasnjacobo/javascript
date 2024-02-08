/*The second way to access the properties of an object is bracket notation ([]).
If the property of the object you are trying to access has a space in its name, 
you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.
Note that property names with spaces in them must be in quotes (single or double).
Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.*/


const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  
  const entreeValue = testObj["an entree"];
  console.log(entreeValue);
  const drinkValue = testObj["the drink"];
