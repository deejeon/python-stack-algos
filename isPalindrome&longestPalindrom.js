function isPalindrome(str) {
    // if(str.length%2==0){
        for(i=0;i<str.length - i;i++){
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
    // }
    // else{
    //     for(i=0; i<(str.length-1)/2; i++){
    //         if (str[i]!==str[str.length - i-1]){
    //             return false;
    //         }
    //     }
    // }
    return true;
}

function longestPalindrom(str) {
    var longest = str[0];
    for (var i = 0; i < str.length; i++) {
        for (var j = i+1; j < str.length; j++) {
            if (str[i] === str[j]){
                var check = "";
                for (var k = i; k <= j; k++) {
                    check += str[k];
                }
                if (isPalindrome(check) && check.length > longest.length ) {
                    longest = check;
                }
            }
        }
    }
    return longest;
}
  
  console.log(longestPalindrom('bobe')); // should log 'bob'
  console.log(longestPalindrom('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrom('Yikes! my favorite racecar erupted!'));
  console.log(longestPalindrom('mom dad'))