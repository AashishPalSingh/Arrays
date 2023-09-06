/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            temp.push(nums[i])
        }
    }
    for(let i=0;i<nums.length;i++){
        if(i<temp.length){
            nums[i]=temp[i];
        }else{
            nums[i]='_'
        }
    }
    console.log(nums.length,temp.length)
    return temp.length;
};