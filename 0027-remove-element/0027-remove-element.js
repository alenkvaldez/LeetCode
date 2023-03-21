/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
        nums[index] = nums[i];
        index++;
      }
    }
    return index;
};

/*
time complexity 0(n)
space complexity 0(1)

1. create index variable (starting at 0)
2. loop thru variable
    a. condition if current value doesnt equal 'val'
        i. set nums[index] to nums[i]
        ii. increment index
3. return index
*/