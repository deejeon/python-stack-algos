/**
 * takes in two arrays of objects
 * returns the current inventory after
 * updating it with the new inventory
 * new items get added; existing items have quantities changed
 */

function updateInventory(newInv, currentInv) {
    for (var i = 0; i < newInv.length; i++) {
        var found = false;
        for (var j = 0; j < currentInv.length; j++) {
            if (newInv[i].name === currentInv[j].name) {
                currentInv[j].quantity += newInv[i].quantity;
                found = true;
                break;
            }

        }
        if (!found) {
            currentInv.push(newInv[i]);
        }
    }
    return currentInv;
}
  
console.log(updateInventory([
    {
        name: 'item',
        quantity: 1
    }
], [
    {
        name: 'item',
        quantity: 2
    }
])); // should log [{ name: 'item', quantity: 3 }]
  
console.log(updateInventory([
    {
        name: 'item',
        quantity: 1
    }
], [
    {
        name: 'other item',
        quantity: 2
    }
])); // should log [{ name: 'item', quantity: 1 }, { name: 'other item', quantity: 2 }]
  
  
/**
 * takes in a string
 * returns a new string
 * with the whitespace removed from both ends
 * whitespace characters: ' ', '\t', '\n'
 */
  
function trim(str) {
    var firstLetterIndex = 0;
    var lastLetterIndex = str.length - 1;
    var newStr = "";
    while (str[firstLetterIndex] === ' ' || str[firstLetterIndex] === '\t' || str[firstLetterIndex] === '\n') {
        firstLetterIndex++;
    }
    while (str[lastLetterIndex] === ' ' || str[lastLetterIndex] === '\t' || str[lastLetterIndex] === '\n') {
        lastLetterIndex--;
    }
    for (var i = firstLetterIndex; i <= lastLetterIndex; i++) {
        newStr = newStr + str[i];
    }
    return newStr;
}
  
console.log(trim('  this   ')); // should log 'this'
console.log(trim(`        multiline`)); // should log 'multiline'


/**
 * takes in two strings
 * returns a boolean
 * Anagram: characters can be rearranged to make the same string
 * Is the second string an anagram of the first?
 */
  
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        var foundEqual = false;
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                foundEqual = true;
                break;
            }
        }
        if (!foundEqual) {
            return false;
        }
    }
    for (var i = 0; i < str2.length; i++) {
        var foundEqual = false;
        for (var j = 0; j < str1.length; j++) {
            if (str2[i] === str1[j]) {
                foundEqual = true;
                break;
            }
        }
        if (!foundEqual) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa')); // should log false