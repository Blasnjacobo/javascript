/*The logical or operator (||) returns true if either of the operands is true. 
Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). 
This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints. 

Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. 
Otherwise, return the string Inside. */
function testLogicalOr(val) {
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  }
  
  console.log(testLogicalOr(15));