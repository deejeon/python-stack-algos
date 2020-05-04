/**
 * takes in a string
 * returns a new string
 * with only the last instance of each character
 * the character order should be preserved
 */

function dedupe(str) {
    var newstr = "";
    for (var i=0; i< str.length;i++){
        var count = 0;
        for (var j = i+1; j < str.length; j++) {
            if (str[j] === str[i]) {
                count++;
                break;
            }
        }
        if (count === 0) {
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(dedupe('abac')); // should log 'bac'
console.log(dedupe('Snaps! crackles! pops!'));
// should log 'Snrackle ops!'


/**
* takes in a string
* returns a new string
* with individual "words" reversed
*/

function reverseWords(str) {
    var newStr = "";
    var newArr = [];
    var word = "";
    for ( var i = 0; i <str.length; i ++){
        if (str[i] === " " && word !== "") {
            newArr.push(word);
            word = "";
        }
        else if (str[i] !== " ") {
            word += str[i];
        }
    }
    if (word !== "") {
        newArr.push(word);
    }
    
    for ( var i = 0; i < newArr.length; i++) {
        var currentWord = newArr[i];
        for (var j = currentWord.length-1; j >= 0; j--) {
            newStr += currentWord[j];
            if (j === 0 && i !== newArr.length - 1) {
                newStr += ' ';
            }
        }
    }
    return newStr;
}

console.log(reverseWords("hello")); // should log 'olleh'
console.log(reverseWords('this that')); // should log 'siht taht'