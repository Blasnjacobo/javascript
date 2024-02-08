let obj = { a: 1, b: 2 }

let clone = {...obj}
clone.foo = 'foo'
console.log(obj, clone)