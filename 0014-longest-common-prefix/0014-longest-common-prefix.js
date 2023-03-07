/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";
    for (let i = 0; i < strs[0].length; i++ ){
        for (let j = 0; j < strs.length; j++){
            if (strs[0][i] !== strs[j][i]){
                return prefix;
            }
        }
        prefix += strs[0][i]
    }
    return prefix
};



/*
1. create prefix variable as empty string
2. loop over strs length of first index(0)
    a. loop over the rest over strs array at index
        i. compare the character from outer loop i with inner loop j
            i. if !== strs, return prefix
    b. concat prefix w outer loop variable
3. return prefix
*/
