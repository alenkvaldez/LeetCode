/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numbers = {}
    for (let i = 0; i < nums.length; i++){ 
    let currentNum = nums[i];
    let neededNum = target - currentNum
    if (neededNum in numbers){
        return [numbers[neededNum], i]
    } else {
        numbers[currentNum] = i;
    }
}
    return [];
};



/*
time complexity: O(n) : loop
space complexity: O(n) : object
pseudo code: 
1. create object(numbers) to compare value
2. loop through (nums) array
	a. create variable (currentNum) for nums[i]
	b. create variable (neededNum) from target - currentNum
	c. create condition with if statement to see if neededNum is in (numbers) object
		i. if targetNum is inside, return matching index in an array
		ii. else, add values to our object
3. return empty array
*/