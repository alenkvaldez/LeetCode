/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var output = [];
    for (let i = 0; i < nums.length; i++){
        output[i] = nums[nums[i]]
    }
    return output;
};