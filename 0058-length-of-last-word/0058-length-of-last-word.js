/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordCount = 0;
    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] !== " "){
            for (let j = i; j >= 0; j--){
                if (s[j] !== " "){
                    lastWordCount++;
                } else {
                    return lastWordCount;
                }
            }
            return lastWordCount;
        }
    }
};

/*
1. create lastWordCount var equal to 0
2. loop backwards s.
    a. condition if current char is not a space
        i. loop backwards for current char.
            1.conditon if current char is not a space
                a. increment lastWordCount
            2. else return lastWordCount.
        ii. return lastWordCount
*/