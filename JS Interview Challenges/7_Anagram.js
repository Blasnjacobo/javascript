/* Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."*/
//THERE IS NOT SORT FUNCTION FOR A STRING, FOR THAT REASON WE HAVE TO MAKE IT AN ARRAY

function isAnagram(str1, str2){
    let sort1 = str1.split("").sort().join("");
    let sort2 = str2.split("").sort().join("");
    return sort1 == sort2 
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));