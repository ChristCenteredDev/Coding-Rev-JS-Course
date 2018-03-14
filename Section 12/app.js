var nums = [6, -5, 2];
var letters = a, b, c

console.log(nums.sort);

var arr = [];






for (var i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
        arr.push(nums[i]);
    } else if (nums[i + 1] || nums[i + 1] == 0) {
        arr.push(nums[i + 1]);
    }
}