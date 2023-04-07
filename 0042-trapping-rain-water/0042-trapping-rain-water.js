/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const maxL = [];
    const maxR = [];
    const minLR = [];
    
    let current = 0;
    for(let i = 0; i < height.length; i++){
        maxL.push(current);
        current = Math.max(current, height[i]);
    }
    current = 0;
    for(let i = height.length - 1; i > -1; i--){
        maxR.push(current);
        current = Math.max(current, height[i]);
    }
    
    maxR.reverse();
    
    for(let i = 0; i < height.length; i++){
        const minofLR = Math.min(maxL[i], maxR[i]);
        minLR.push(minofLR);
    }
    
    let water = 0;
    for(let i = 0; i < height.length; i++){
        if(minLR[i] - height[i] > 0){
            water += minLR[i] - height[i];
        }
    }
    
    return water;
};