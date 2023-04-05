/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length -1];
    // l pointer at first index
    // r pointer at last index
    
    while (left < right){
        const curSum = numbers[left] + numbers[right]
    // while loop to itereate thru array 
        // compute current sum
        
    const isTargetLess = curSum > target;
        if (isTargetLess) right--;
    // if curSum is > target
        // right pointer shifts to left
          
    const isTargetGreater = curSum < target;
        if (isTargetGreater) left++;
    // if curSum < target
        // left pointer shifts to right
        
    const isTarget = curSum === target;
        if (isTarget) return [left +1, right +1];
    }
    return [];
    // when found
    // return indices left and right
};