/**
 * takes in an array
 * returns a string connecting all the page
 * ranges with a comma and a space
 */

function bookIndex(arr) {
    first = arr[0];
    last = arr[0];
    outputStr = "";
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1] + 1) {
            if (first === last)
                outputStr += first + ', ';
            else 
                outputStr += first + "-" + last + ", ";
            first = arr[i];
        }
        last = arr[i];
    }
    if(first === last)
        outputStr +=first;
    else
        outputStr += first + "-" + last;
    return outputStr;
}

console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11, 15]));
// should log '1-3, 5-7, 10-11'
console.log(bookIndex([5, 10, 11, 12])); // should log '5, 10-12'
  
  
/**
 * takes in an array and a separator string
 * returns a string connecting all the array
 * elements with the given separator
 */

function join(arr, separator) {
    outputStr = "";
    outputStr += arr[0];
    for (var i = 1; i < arr.length; i++)
    {
        outputStr += separator + arr[i];
    }
    return outputStr;
}

console.log(join(['a', 'b', 'c'], '|')); // should log 'a|b|c'
console.log(join(['a', 'b', 'c'], '? ')); // should log 'a? b? c'
console.log(join(['a', 'b', 'c'], ',,')); // should log 'a,,b,,c'


// if (arr[i] === arr[i-1] + 1) {
//     last = arr[i];
// }
// else {
//     if(first === last){
//         outputStr += first + ', ';
//     }
//     else{
//         outputStr += first + "-" + last + ", ";    
//     }
//     first = arr[i];
//     last = arr[i];
// }