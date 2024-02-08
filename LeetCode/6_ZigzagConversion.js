/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let array = []
        do {
            let accum = 0
            for (let i=0; i<numRows;i++){
                console.log(s[accum])
                if (s[accum] === undefined) break
                    if (!array[i]){
                        array[i]=s[accum]
                    } else
                    array[i]=array[i]+s[accum]
                    accum ++
            }
            for (let i=numRows-2; i>0;i--){
                console.log(s[accum])
                if (s[accum] === undefined) break
                array[i]=array[i].concat(s[accum])
                accum++
            }
            s=s.slice(accum, s.length)
        } while (s.length !== 0)
    return array.map(String).join('')
};
console.log(convert('PAYPALISHIRING', 4))