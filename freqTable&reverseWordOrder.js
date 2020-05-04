function freqTable(str) {
    var newObj = {};

    for (var i = 0; i < str.length; i++) {
        var count = 0;
        if (newObj.hasOwnProperty(str[i]) === false) {
            for (var j = i; j < str.length; j++) {
                if (str[j] === str[i]) {
                    count++;
                }
            }
            newObj[str[i]] = count;
        }
    }
    return newObj;
}

console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }
// we want to go through the strings
// we want to use "  " to tell it "this is the end of a word"

function reverseWordOrder(str) {
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
    for (var j = newArr.length-1; j >= 0; j--) {
        newStr += newArr[j];
        if (j !== 0) {
            newStr += " ";
        }
    }
    return newStr;
}

console.log(reverseWordOrder('this statement'));
// should log 'statement this'
console.log(reverseWordOrder('This is a test'));
// should log 'test a is This'
// looks good Dan...nice work!
// did it run?
// my Jsbin looks to be messed up
// didnt work at first but we had i-- instead of j-- so i fixed that. let me run it again
// it's not adding a space for the first word which is because we're running the loop backwards
// so line 41 should be j !== 0
// it works now! YOU GOT IT!!!!
// go ahead and save or copy and paste the code before i close it

// got it, i like to type sudo code in between the lines so i can remmeber down the line.