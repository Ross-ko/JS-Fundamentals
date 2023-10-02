function condenseArrayToNumber(nums) {

    let arr = [];

    while (nums.length > 1) {

        for (i = 0; i < nums.length - 1; i++) {
            arr[i] = nums[i] + nums[i+1];
        }
        nums = arr;
        arr = [];
    }
        

    console.log(nums.join());
}

condenseArrayToNumber([2,10,3]);
console.log('-------------------------------------------------------------------------');
condenseArrayToNumber([5,0,4,1,2]);
console.log('-------------------------------------------------------------------------');
condenseArrayToNumber([1]);
console.log('-------------------------------------------------------------------------');