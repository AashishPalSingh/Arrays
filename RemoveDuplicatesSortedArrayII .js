/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let b=2;
    for(let i=2;i<nums.length;i++){
        if(nums[i]!=nums[b-2]){
            nums[b++]=nums[i];
        }
    }
    return b;
};