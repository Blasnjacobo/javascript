/*In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

let myStr = "Bob";
myStr[0] = "J";
Note that this does not mean that myStr could not be re-assigned. 
The only way to change myStr would be to assign it with a new value, like this:

let myStr = "Bob";
myStr = "Job";
Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above. */

let myStr = "Jello World";

//myStr[0] = "H"; // ERROR CODE
myStr = "Hello World";
console.log(myStr);
