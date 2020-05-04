/**
* takes in an integer
* returns an integer
* sums all the digits until the answer has only ONE DIGIT
*/

function rSumToOneDigit(num) {
    if (num < 10) return num;
    var lastDigit = num%10;
    var sum = lastDigit + rSumToOneDigit(Math.floor(num/10));
    return rSumToOneDigit(sum);
}

console.log(rSumToOneDigit(19)); // should log 1: 1 + 9 = 10 -> 1 + 0 = 1
console.log(rSumToOneDigit(999)); // should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9


/**
 * takes in a string
 * an array of solutions
 * and a partial solution string
 * returns an array of anagrams
 * NOTE: the order of the individual strings inside the
 * returned array is unimportant; just make sure you get them all
 */

function stringAnagrams(str, anagrams = [], partial = '') {
    if (str.length === 1) return anagrams.push(str);
    if (str.length === 2) {
        anagrams.push(str);
        var newStr=str[1] + str[0];
        anagrams.push(newStr);
        return anagrams;
    }
    if (str.length === 3){
        var strOne = str[0];
        var strTwo = str [1];
        var strThree = str [2];
        for (var i=0; i=str.length-1; i++){
            partial = strTwo+strThree
        }
    }
}

// 'something'.slice(2, 4) returns a new string 'me'
// 'something' + 'else' returns a new string 'somethingelse'

console.log(stringAnagrams('mi')); // should log ['mi', 'im']
console.log(stringAnagrams('mil'));
// should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']

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

function stringAnagrams(str, anagrams = [], partial = '') {
    if (str.length === 1) return anagrams.push(str);
    if (str.length === 2) {
        anagrams.push(str);
        var newStr=str[1] + str[0];
        anagrams.push(newStr);
        return anagrams;
    }
    for (var i = 0; i < str.length; i++) {
        var temp = rotateString(str,i);
        
        anagrams.push(temp[0] + stringAnagrams(somestr))
        
    }
}

// niv's solution
// function stringAnagrams(str, anagrams = [], partial = '') {
//     if (str.length==1){
//         anagrams.push(partial+str)
//     }
//     else{
//         for (var i =0; i<str.length; i++){
//             var newStr = str.slice(0,i)+str.slice(i+1)
//             stringAnagrams(newStr, anagrams, partial+str[i])
//         }
//     }
//     return anagrams
// }