import podcasts from "./data.mjs";

/* Find Free Podcasts 

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data){
    return data
    .filter((element) => {return element.paid === false})
    .map(({title, rating, paid}) => 
    {return `title: ${title}, rating: ${rating}, paid:${paid}`})
};
console.log(getFreePodcasts(podcasts))
