
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    // if stack is empty 
    if (this.min.length === 0) this.min.push(x);
    else {
         //if stack is non empty push the min element between current ele and top of this.min
        //for instance our stack was [-1, -0, -3]
        //push(-1) this.arr = [-1] | this.min = [-1]
        //push(0) this.arr = [-1, 0] | this.min = [-1, -1]
        //push(-3) this.arr = [-1,0,-3] | this.min = [-1,-1,-3]
        this.min.push(Math.min(this.min[this.min.length - 1], x));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length != 0){
        //pop ele from both this.arr and this.min
        this.stack.pop();
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //if this.stack non empty return element at last index of this.stack
    if (this.stack.length != 0) return this.stack[this.stack.length - 1];
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //if this.min non empty return element at last index of this.min
    if (this.min.length != 0) return this.min[this.min.length -1];
    return null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */