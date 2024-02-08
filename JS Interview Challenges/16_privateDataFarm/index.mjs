/* Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}
*/

/*DISCLAIMER: Node.js's original module system is CommonJs (which uses require and module.exports).
Since Node.js was created, the ECMAScript module system (which uses import and export) has become standard and Node.js has added support for it.
Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript modules. 
It will treat .js files as whatever the default module system for the project is (which is CommonJS unless package.json says "type": "module",).*/

import userData from "./data.mjs";
function transformData(data){
    return data.map(({name, dob}) =>{
        return console.log({ 
        fullname : `${name.first} ${name.last}`,
        birthday : new Date(dob.date).toDateString()
        })
    })       
}

console.log(transformData(userData));