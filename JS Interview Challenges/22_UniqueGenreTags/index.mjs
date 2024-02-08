import mediaData from "./data.mjs";

/* Find All Unique Tags 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]
*/ 

function getUniqueTags(data){
    let newArr= data.map(elem => elem.tags).flat();
    return newArr.filter(function (item, pos){
        return (newArr.indexOf(item) == pos)
    });
}

/*
function getUniqueTags(data){
    const tags = data.map(podcast => podcast.tags).flat();
    const uniqueTags = {};
    
    // filter tags arr
    return tags.filter(tag => {
         // look up the tag in the uniqueTags obj
         if(!uniqueTags[tag]){
             uniqueTags[tag] = true;
            // if it's not the, we have a unique item 
            // put the item in our object with a value of true
            return true;
         }
         return false;
    })
*/

/*
    const tags = data.map(podcast => podcast.tags).flat();
    // create a new array uniqueTags to hold the unique values
    const uniqueTags = [];
    tags.forEach(tag => {
    // is the element already in the uniqueTags arr? 
    if(!uniqueTags.includes(tag)){
        uniqueTags.push(tag)
    }
    return uniqueTags;})
*/
  

console.log(getUniqueTags(mediaData));

