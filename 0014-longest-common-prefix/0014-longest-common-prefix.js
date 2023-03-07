/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for(let i = 0; i < strs[0].length; i++){
        for (let j = 1; j < strs.length; j++){ 
            if (strs[0][i] !== strs[j][i]){
                return prefix;
            }
        }
        prefix += strs[0][i]
    }
    return prefix;
};



/*
1. create prefix variable as empty string
2. loop over strs of first index
    a. loop over the rest over strs array at index of 0
        i. compare the character from outer loop w inner loop j
            i. if !== strs, return prefix
    b. concat prefix w outer loop variable
3. return prefix
*/
