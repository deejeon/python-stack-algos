/**
 * takes in a string
 * returns a string
 * with the original "compressed"
 * if the "compressed" version IS NOT shorter,
 * return the original
 */

function encode(str) {
    var newStr = "";
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        }
        else if (str[i] !== str[i+1]) {
            newStr += str[i] + count;
            count = 1;
        }
        else if (i === str.length - 1){
            newStr += str[i] + count;
        }
    }
    return (newStr.length < str.length) ? newStr : str;
}

console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abc')); // should log 'abc'
  //*condition ? value_if_true : value_if_false
  //*c = (a < b) ? a : b;
  
  /**
   * takes in a string
   * returns a string
   * with the original "expanded"
   * 
   * parseInt('a') returns NaN
   * parseInt('5') returns 5
   * isNaN('c') returns true
   */
  
function decode(str) {
    var newstr = ''
    var char = ''
    var count = ''
    for (var i = 0; i<str.length; i++){
        if (isNaN(str[i])) {
            char = str[i];
        }
        else {
            count += str[i]
            if (isNaN(str[i+1])) {
                newstr += char.repeat(parseInt(count));
                count = '';
            }
        }
    }
    return newstr;
}

console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a1b10')); // should log 'abbbbbbbbbb'