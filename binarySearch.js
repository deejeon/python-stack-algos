/**

takes in a sorted array of numbers
and a search value
returns a boolean
Is the given value in the array?
DON'T ITERATE THROUGH THE ENTIRE ARRAY */
function binarySearch(arr, val) {
    var startIndex = 0;
    var endIndex = arr.length-1;
    while (startIndex <= endIndex) {
        var middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[middleIndex] === val) {
            return true;
        }
        else if (arr[middleIndex] > val){
            endIndex = middleIndex-1;
        }
        else {
            startIndex = middleIndex+1;
        }
    }
    return false;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // should log true
console.log(binarySearch([1, 2, 4, 5], 3)); // should log false
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)); // should log true

/**
 
BONUS: Once done, create this version
returns the number of occurrences of the value */
function binarySearchBonus(arr, val) {
    // var startIndex = 0;
    // var endIndex = arr.length-1;
    // var count = 0;
    // var middleIndex = Math.floor((startIndex + endIndex) / 2);

}

console.log(binarySearchBonus([1, 2, 3, 4, 5], 3)); // should log 1
console.log(binarySearchBonus([1, 2, 4, 4, 4, 5], 4)); // should log 3