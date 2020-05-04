/**
 * takes in an integer "cents"
 * returns an object with coin denominations
 * each coin amount should be maximized
 */

function coinChange(cents) {
    coins = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    coins['quarters'] = Math.floor(cents / 25)
    cents = cents % 25
    coins['dimes'] = Math.floor(cents / 10)
    cents = cents % 10
    coins['nickels'] = Math.floor(cents / 5)
    cents = cents % 5
    coins['pennies'] = cents
    return coins
}

console.log(coinChange(7));
// should log { quarters: 0, dimes: 0, nickels: 1, pennies: 2 }
console.log(coinChange(27));
// should log { quarters: 1, dimes: 0, nickels: 0, pennies: 2 }


/**
 * takes in an UNSORTED array of integers
 * returns either the "missing" number
 * or null if there is no missing number
 */

function missingValue(arr) {
    var max = arr[0];
    var min = arr[0];
    var numbers = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        numbers[arr[i]] = 1;
    }
    var theoreticalMin = max + 1 - arr.length;
    if (theoreticalMin === min) {
        return null
    }
    // for (var j = min; j <= max; j++) {
    //     var found = false;
    //     for (var k = 0; k < arr.length; k++) {
    //         if (j === arr[k]) {
    //             found = true;
    //             break;
    //         }
    //     }
    //     if (found === false) {
    //         return j;
    //     }
    // }
    for (var j = min; j <= max; j++) {
        if (numbers.hasOwnProperty(j) === false){
            return j;
        }
    }
}


//(12456789)
console.log(missingValue([2, 0, 3])); // should log 1
console.log(missingValue([1, 0, 3, 2])); // should log null