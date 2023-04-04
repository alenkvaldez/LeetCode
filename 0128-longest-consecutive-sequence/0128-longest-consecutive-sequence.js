/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums === null || nums.length === 0){
        return 0
    }
    
    const set = new Set(nums)
    let max = 0
    
    for (let num of set){
        if(set.has(num-1)){
            continue
        }
        
        let currentNumber = num
        currentMax = 1; 
        
        while (set.has(currentNumber+1)){
            currentNumber++
            currentMax++
        }
        max = Math.max(max, currentMax)
    }
    return max
};