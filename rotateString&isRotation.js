/**
 * takes in a string and a number
 * returns a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function rotateString(str, num) {
    newStr = "";
    if ( num > str.length ) {
        num = num % str.length;
    }
    for ( var i = str.length - num; i < str.length; i++ ) {
        newStr += str[i];
    }
    for ( var i = 0; i < str.length - num; i++) {
        newStr += str[i];
    }
    return newStr;
}

console.log(rotateString('Boris Godunov', 5));
// should log 'dunovBoris Go'
console.log(rotateString('this', 5)); // should log 'sthi'


/**
 * takes in two strings
 * returns a boolean
 * Is the second string a rotation of the first?
 * See if you can optimize once you get it working.
 */

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    for ( var i = 0; i < str1.length; i++) {
        if ( rotateString(str1, i) === str2) {
            return true
        }
    }
    return false
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
// should log true
console.log(isRotation('hello world', 'llo worldHe'));
// should log false