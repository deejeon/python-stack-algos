/**
 * takes in an array of numbers
 * returns the sum of all the elements
 */

function rSumArray(arr, i=0) {
    if (i === arr.length) return 0;
    return arr[i] + rSumArray(arr, i+1);
}

// rSumArray([2], i=0) // returns arr[0] + rSumArray([2], 1) = 2 + 0 = 2
// rSumArray([2,4], i=0) // needs to return 6; return arr[0] + rSumArray([2,4], 1) = arr[0] + arr[1] + rSumArray([2,4], 2) = arr[0] + arr[1] + 0 = 6

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4


/**
 * takes in a number
 * and a default index
 * returns the sum of numbers from 1
 * up to and including the number
 */

function rSigma(num) {
    if (num === 1) return num;
    return num+rSigma(num-1); 
}

console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)

// rSigma(0) // returns 0
// rSigma(1) // return 1 + rSigma(0) = 1 + 0 = 1
// rSigma(2) // return 2 + rSigma(1) = 2 + 1 + rSigma(0) = 2 + 1 + 0
// rSigma(3) // return 3 + rSigma(2) = 3 + 2 + rSigma(1) = 3 + 2 + 1 + rSigma(0) = 3 + 2 + 1 + 0