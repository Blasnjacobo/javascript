import podcasts from "./data.mjs";

/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

function sortByDuration(data, flightLength){
  if (flightLength <= 60) {
    data.sort((a, b) => {
        return a.duration - b.duration
    })
  } else {
    data.sort((a,b) => {
        return b.duration - a.duration
    })
}

return data.map((element, index) => {
    return `${index+1}. ${element.title}, ${element.duration} minutes`
})

}

console.log(sortByDuration(podcasts, 70))
