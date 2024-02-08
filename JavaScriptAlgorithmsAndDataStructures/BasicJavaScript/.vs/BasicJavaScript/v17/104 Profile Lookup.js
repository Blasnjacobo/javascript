/*We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.*/
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
   for  (let i=0;i<=3; i++){
      if ((contacts[i]["firstName"] === name) && (contacts[i][prop] !== undefined))
      return contacts[i][prop];
        else if ((contacts[i]["lastName"] == name)  && (contacts[i][prop] !== undefined))
        return contacts[i][prop];
          else if ((contacts[i]["number"] == name) && (contacts[i][prop] !== undefined))
          return contacts[i][prop];
            else if ((contacts[i]["likes"] == name) && (contacts[i][prop] !== undefined))
            return contacts[i][prop];}
            if ((contacts[0]["firstName"] || contacts[1]["firstName"] ||contacts[2]["firstName"] || contacts[3]["firstName"]) !== name){
      return "No such contact";}
        if ((contacts[0].hasOwnProperty(prop) === false) ) 
        return "No such property";
        if ((contacts[1].hasOwnProperty(prop) === false) ) 
        return "No such property";
        if ((contacts[2].hasOwnProperty(prop) === false) ) 
        return "No such property";
        if ((contacts[3].hasOwnProperty(prop) === false) ) 
        return "No such property";
  }
  
  
  console.log(lookUpProfile("Sherlock", "likes"));
  console.log(lookUpProfile("Kristian", "lastName"));
  console.log(lookUpProfile("Bob", "number"));
  console.log(lookUpProfile("Akira", "address"));
  console.log(lookUpProfile("Bob", "potato"));