/**
* takes in a SORTED array
* and a value to find
* returns a boolean
* Is the value in the array?
* BONUS: Do it without slice
*/

function rBinarySearch(arr, val) {
    if (arr.length === 0) return false;
    var halfway_index = Math.floor( (arr.length - 1) / 2 );
    if (arr[halfway_index] === val) return true;
    else if (arr[halfway_index] < val) return rBinarySearch(arr.slice(halfway_index + 1), val);
    else return rBinarySearch(arr.slice(0, halfway_index), val);
}

function rBinarySearch(arr, val, startIndex = 0, endIndex = arr.length-1) {
    if (endIndex < startIndex) return false;
    var halfway_index = Math.floor( (endIndex + startIndex) / 2 );
    if (arr[halfway_index] === val) return true;
    else if (arr[halfway_index] < val) return rBinarySearch(arr, val, startIndex = halfway_index + 1, endIndex);
    else return rBinarySearch(arr, val, startIndex, endIndex = halfway_index - 1);
}

// [1, 2, 3, 4, 5].slice(1, 4) returns [2, 3, 4], which is a NEW ARRAY

console.log(rBinarySearch([1, 2, 3, 4, 5], 3)); // should log true
console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false


/**
* takes in a string
* returns a new string
* with the characters reversed
*/
function rStringReverse(str) {
    if (str === "") return "";
    if (str.length === 1) return str;
    return str[str.length-1] + rStringReverse(str.slice(0, str.length-1));
}

function rStringReverse(str, index = 0) {
    if (index == str.length-1) return str[index];
    return rStringReverse(str, index+1) + str[index] // str[1] + str[0]
}

console.log(rStringReverse('i'));
console.log(rStringReverse('hi'));
console.log(rStringReverse('hello')); // should log 'olleh'
console.log(rStringReverse('world')); // should log 'dlrow'