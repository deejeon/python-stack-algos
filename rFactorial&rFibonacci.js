/**
 * takes in a number
 * returns a number
 */

function rFactorial(num) {
    if (num === 1) return num;
    if (num === 0) return 1;
    return num * rFactorial(num - 1);
}


console.log(rFactorial(5)); // should log 120 (5 x 4 x 3 x 2 x 1)
console.log(rFactorial(4)); // should 24 (4 x 3 x 2 x 1)
console.log(rFactorial(0)); // should 1


/**
 * takes in a number
 * returns a number
 * first two terms are 0, 1
 * subsequent terms are formed by adding the previous two terms
 * Terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
 * BONUS: keep track of your previous work with a default parameter
 */

function rFibonacci(idx) {
    if (idx === 1 || idx === 0) return idx;
    return rFibonacci(idx - 1) + rFibonacci(idx - 2);
}

function rFibonacci(idx, fibs = [0, 1]) {
    if (idx < fibs.length) return fibs[idx];
    var next = rFibonacci(idx - 2, fibs) + rFibonacci(idx - 1, fibs);
    fibs[idx] = next;
    return next;
}

console.log(rFibonacci(2)); // should log 1 (1 + 0)
console.log(rFibonacci(3)); // should log 2 (1 + 1)
console.log(rFibonacci(7)); // should log 13 (8 + 5)