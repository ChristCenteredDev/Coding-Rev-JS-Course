// Arrays

var arr = ["Ted", "Fred", "Frank"];
console.log(arr.length);
console.log(arr[2]);
arr[2] = "Frankie";
arr[3] = "Frannie";
arr[5] = "Teddie";
console.log(arr);

// Push Pop Shift Unshift
var array = [1, 2, 3];


// push() method adds one or more elements to the end of an array
// pop() method removes the last element from an array
// shift() method removes the first element from an array
// unshift() method adds one or more elements to the beginning of an array

array.push(4, 5);
array.pop();
array.shift();
array.unshift(0, 1)
console.log(array);

// Index of, Splice, Slice

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// splice() method changes the contents of an array by removing existing elements and/or adding new elements.
// slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

var array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2);
console.log(array2.indexOf(7, 0));  // Expected 6
console.log(array2.splice(3, 4, 4)) // 4, 5, 6, 7
array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2.slice(3, 7)); // 4, 5, 6, 7


// Concat & Join
var array3 = ["John", "Helen", "Frances", "Mark"];
var otherArray = ["Marcy", "Micheal"];

var finalArray = array3.concat(otherArray);

console.log(array3);
console.log(otherArray);
console.log(finalArray);

var array4 = ["John", "Helen", "Frances", "Mark"];
var newArray4 = array4.join();
console.log(newArray4);

// Helpers: Filter

var nums = [1, 5, 10, 20, 30];

var filtered = nums.filter(function (item) {
    if (item > 9) {
        return item
    }
});

console.log(filtered);
console.log(nums);

// Helpers: Map