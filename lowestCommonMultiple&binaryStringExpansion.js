/**
 * takes in two integers
 * returns an integer
 * remember finding a common denominator for fraction addition/subtraction?
 */

function lowestCommonMultiple(num1, num2) {
    if (num1 === num2) return num1;
    if (num1 === 1 || num2 === 1) return num1*num2;

    if (num1 > num2) {
        var min = num2;
        if (num1 % num2 === 0) return num1;
    };
    if (num2 > num1) {
        var min = num1;
        if (num2 % num1 === 0) return num2;
    };
    for (var i = 2; i <= min; i++) {
        var commonFactor = -1;
        if (num1 % i === 0 && num2 % i === 0){
            commonFactor = i;
            break;
        }
    }

    if (commonFactor === -1) return num1*num2;

    return num1*num2 / i;
}

console.log(lowestCommonMultiple(3, 4)); // should log 12
console.log(lowestCommonMultiple(4, 6)); // should log 12


/**
 * takes in a string
 * a default array of solutions
 * a partial solution string
 * returns the array of solutions
 * with every `?` replaced by both a 0 and a 1
 * NOTE: the order of the solutions in the output DOES NOT MATTER
 */

function binaryStringExpansion(str, solutions = [], partial = '') {
    var i = str.indexOf('?');
    if (i===-1) solutions.push(partial + str)
    else {
        var strAfter = str.slice(i+1);
        binaryStringExpansion(strAfter, solutions, partial+str.slice(0,i)+'0');
        binaryStringExpansion(strAfter, solutions, partial+str.slice(0,i)+'1');
    }
    return solutions;
}

// 'something'.indexOf('m') returns 2
// 'something'.indexOf('b') returns -1 since it's not in the string
// 'something'.slice(2) returns a new string: 'mething'

console.log(binaryStringExpansion('001?0')); // should log ['00100', '00110']
console.log(binaryStringExpansion('001?0?'));
// should log ['001000', '001100', '001001', '001101']