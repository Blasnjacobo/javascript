/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
*/
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(false));

    // Empty pattern matches empty string
    dp[0][0] = true;

    // Deals with patterns like a*, a*b*, a*b*c* etc.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }
    }

    return dp[m][n];
};

// Test cases
console.log(isMatch("aa", "a"));    // Output: false
console.log(isMatch("aa", "a*"));   // Output: true
console.log(isMatch("ab", ".*"));   // Output: true