/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let mySet= new Set();
    for(let num of nums){
        mySet.add(num);
    }
    let index = 0;
    for(let setValue of mySet.values()){
        nums[index]=setValue;
        index++;
    }
    while(index<nums.length){
        nums[index]='_';
        index++
    }
    return mySet.size
};