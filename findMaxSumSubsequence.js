let findMaxSumSubsequence = function(nums) {
    // Case for empty input
    if (nums.length < 1) {
        return 0;
    } 
    // Case for input with only 1 element
    else if (nums.length === 1) {
        return nums[0];
    }

    // prevOfPrev will store the maximum sum until index i - 2
    let prevOfPrev = nums[0];
    
    // prev will store the maximum sum until index i - 1
    prev = Math.max(nums[0], nums[1]);
    
    // Starting from index 2 as i -1 and i - 2 have been used already
    for (var i = 2; i < nums.length; i++) {
        // Store the maximum sum until index i as curr
        // Max.max(first entry - makes sure prevOfPrev isnt negative, second entry is normal checking)
        let curr = Math.max(nums[i], Math.max(prev, prevOfPrev + nums[i]));
        prevOfPrev = prev;
        prev = curr;
    }

    return prev;
};