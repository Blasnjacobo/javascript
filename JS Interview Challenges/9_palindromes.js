// Palindromes are words that are the same forward or backward. For example,  the words "noon" and "kayak" are a palindromes. 
function isPalindrome(str){
    return (str == str.split("").reverse().join(""));
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
