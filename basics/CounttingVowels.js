const CountingVowels = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    string.split('').forEach(char => {
        if (vowels.includes(char)) {
            count = count + 1;
            console.log(char);
        }
    });

    return count;
};

console.log(CountingVowels('paramount'));