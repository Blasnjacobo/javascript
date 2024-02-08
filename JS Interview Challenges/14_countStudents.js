// Your function should take in an array and return a number representing the total number of new attendees.

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    return arr.reduce((accum, initialValue) => accum+=initialValue)
}

console.log(sumArray(studentCount));
