/*To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. 
someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}
Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. 
If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.

 */

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) 
        return obj[checkProp];
    else
      return "Not Found";
    
  }
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));