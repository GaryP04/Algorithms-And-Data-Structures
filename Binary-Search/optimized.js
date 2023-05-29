function binarySeach (nums, target) {
    let start =0;
    let end = nums.length -1;

    while (start < end) {
        ///ensure that 'curr' index is always rounded down
        curr = Math.floor((end-start)/2) + start;
        if (nums[curr] === target) {
            return curr;
        } else if (target < nums[curr]) {
            end = curr -1;
        } else {
            start = curr + 1;
        }
    }
    return -1;
}
console.log (binarySeach([-15, -9, -4, -1, 2, 5, 16, 30, 56], -9));