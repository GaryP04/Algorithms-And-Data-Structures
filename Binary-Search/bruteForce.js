///create a function 'binarySearch' to take parameters 'nums' and 'target'.
function binarySeach (nums, target) {
    /// 'start' is initialized to 0, starting index of search range.
    let start = 0;
    /// 'end' is initalized to 'nums.length -1', ending index of search range.
    let end = nums.length -1;
    /// the 'while' loop runs as long as 'start' is less than or equal to 'end'.
    while (start <= end) {
        ///'curr' is calculated as the middle index of the current search range, rounded.
        curr = Math.round((end - start) / 2) + start;
        ///if the value at index 'curr' in the array 'nums' is equal to the target
        if (nums[curr] === target) {
            ///the function returns 'curr' indicating that the target is found.
            return curr;
            ///if the target value is less than the value at index 'curr'
        } else if (target < nums[curr]) {
            ///update 'end' to 'curr -1'
            end = curr - 1;
            ///if the target value is greater than the value at index 'curr'
        } else {
            ///update 'start' to 'curr +1'
            start = curr + 1;
        }
    }
    return -1;
}
///calls the 'binarySearch' function with the provided array and target.
console.log(binarySeach([-15, -9, -4, 1, 5, 8, 15, 19, 23, 39], 0));