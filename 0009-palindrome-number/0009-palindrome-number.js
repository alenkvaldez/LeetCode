/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false;
    }
    let reversed = 0;
    let current = x;
    while (current !== 0){
        reversed = reversed * 10 + current % 10;
        current = Math.floor(current/10);
    }
    return x == reversed;
};

/*
time complexity: O(n)
space complexity: O(1)

1. condition if "x" is negative
    a. return false.
2. create reversed variable
3. create current variable equal to x
4. while loop for current doesnt equal to 0
    a. set reverse equal to reversed * 10 + current mod 10.
    b. divide current by 10
5. return if "x" is equal to reverse 

*/