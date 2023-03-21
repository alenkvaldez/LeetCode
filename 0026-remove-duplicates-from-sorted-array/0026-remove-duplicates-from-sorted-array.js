/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let indexCounter = 0
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != nums[i - 1]){
            nums[indexCounter] = nums[i]
            indexCounter++
        }
    }
    return indexCounter
};

/*
i 0 1 2 3 4
indexCounter 0 1 2
arr is [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
*/