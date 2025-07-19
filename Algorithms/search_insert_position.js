/**
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
 */

var searchInsert = function(nums, target) {
    // Initialize pointers for binary search
    let right = nums.length - 1;  // Right boundary (last valid index)
    let left = 0;                 // Left boundary (first index)

    // Continue searching while search space is valid
    while(right >= left) {
        // Calculate middle index to avoid integer overflow
        // Math.floor ensures we get integer when sum is odd
        let mid = Math.floor((right + left) / 2);
        
        // Case 1: Target found at middle position
        if(target === nums[mid]) {
            return mid;  // Return exact match index
        } 
        // Case 2: Target is greater than middle element
        else if(target > nums[mid]) {
            left = mid + 1;  // Search in the right half
                            // Eliminate left half including mid
        } 
        // Case 3: Target is less than middle element
        else {
            right = mid - 1;  // Search in the left half
                             // Eliminate right half including mid
        }
    }

    // When loop exits, right < left
    // At this point, left is the correct insertion position
    // because left points to the first element greater than target
    return left;
};
