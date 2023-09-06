/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
        k = k % n;
        let i=0;
        let j=0;
        for (i = n - k, j = n - 1; i < j; i++, j--) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        for (i = 0, j = n - k - 1; i < j; i++, j--) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        for (i = 0, j = n - 1; i < j; i++, j--) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
};