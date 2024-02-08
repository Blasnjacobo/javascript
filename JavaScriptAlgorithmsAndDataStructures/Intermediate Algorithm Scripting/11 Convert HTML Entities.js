/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
    let obj= {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&apos;"
    }
    return  str
    .split("")
    .map(pair => obj[pair] || pair)
    .join('');
}

console.log(convertHTML("Dolce & Gabbana"));