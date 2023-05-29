/// this code does not return -1 when target is not found in array.
///FIX
function binarySearch (nums, target) {
    let start = 0;
    let end = nums.length -1; {
        while (start <= end) {
            for (let i=start; i<=end; i++) {
                if (nums[i] === target) {
                    return i;
                return -1};
            }
        }
    }
}
console.log(binarySearch([-15, -9, -4, 1, 5, 8, 15, 19, 23, 39], 0));