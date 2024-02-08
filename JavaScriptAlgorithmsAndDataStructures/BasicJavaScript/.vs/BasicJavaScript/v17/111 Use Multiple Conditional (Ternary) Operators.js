/*In the previous challenge, you used a single conditional operator. 
You can also chain them together to check for multiple conditions.
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above.
Using multiple conditional operators without proper indentation may make your code hard to read.
In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. 
The function should return positive, negative or zero. */


function checkSign(num) {
    return (num > 0) ? "positive" 
        : (num < 0) ? "negative" 
        : "zero";
    }
    
    console.log(checkSign(10));