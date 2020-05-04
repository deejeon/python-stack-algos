function parensValid(str) {
    var openCount = 0;
    var closeCount = 0;
    for(var i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openCount++
        }
        else if (str[i] === ')') {
            closeCount++
        }
        if (closeCount > openCount) {
            return false;
        }
    }
    return openCount === closeCount;
}

function validBraces(braces) {
    let checker = [];
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            checker.push(braces[i]);
        }
        else {
            if (checker.length === 0) return false;
            let lastValue = checker[checker.length - 1];
            if ((braces[i] === ')' && lastValue === '(') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ']' && lastValue === '[')) {
                checker.pop();
            }
            else {
                return false;
            }
        }
    }
    return checker.length === 0;
}