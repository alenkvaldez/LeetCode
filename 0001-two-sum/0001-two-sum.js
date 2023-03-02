/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numbers = {};
    for (let i = 0; i < nums.length; i++){
        let currentNum = nums[i];
        let neededNum = target - currentNum;
        if (neededNum in numbers){
            return [numbers[neededNum], i]
            } else {
                numbers[currentNum] = i;
            }
        }
    return [];
};


/*
time complexity:
space complexity:
pseudo code: 
1. create object(numbers) to compare value
2. loop through (nums) array
	a. create variable (currentNum)
	b. create variable (neededNum) from target - currentNum
	c. create condition to see if targetNum is inside (numbers) object
		i. if targetNum is inside, return mathing index in an array
		ii. else, add values to our object
3. return empty array
*/