/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length -1;
    let maxAreaCalculated = findArea(leftPointer, rightPointer, height)
    while(leftPointer < rightPointer){
        if(height[leftPointer] < height[rightPointer]){
            leftPointer++
        } else {
            rightPointer--
        }
        const currentArea = findArea(leftPointer, rightPointer, height)
        maxAreaCalculated = Math.max(currentArea, maxAreaCalculated)
    }
    return maxAreaCalculated
};
    
var findArea = function(leftPointer, rightPointer, height){
    const width = rightPointer - leftPointer 
    const length = Math.min(height[leftPointer], height[rightPointer])
    const area = width * length;
    return area
}


//1. create leftPointer and assign to 0
//2. create rightPointer and assign to the height.length - 1
//3. create maxArea var and assign to current area with starting pointers
//4. while(loop) leftPointer is less than rightPointer
    //a. if index value at leftPointer is less than index value at rightPointer, increment leftPointer 
    //b. else decrement right pointer 
    //c. calculate area and then take max of current area and maxArea
//5. return maxArea
