 /**
 * takes in an array of numbers
 * returns a boolean
 * Is there a point between indices
 * where the summed values on each side are equal?
 */

function sum(arr, x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum += arr[i];
    }
    return sum;
}

function balancePoint(arr) {
    if (sum(arr, 0, arr.length) === 0) {
        return true;
    }
    for (var i = 0; i < arr.length; i++) {
        if (sum(arr, 0, i) === sum(arr, i+1, arr.length-1)) {
            return true;
        }
    }
    return false;
}



// function balancePoint(arr) {
//     if (sum(arr, 0, arr.length) === 0) {
//         return true;
//     }
//     for (var i = 0; i < arr.length; i++) {
//         sumLeft = 0;
//         sumRight = 0;
//         for (var j = 0; j <= i; j++) {
//             sumLeft += arr[j]
//         }
//         for (var k = i+1; k < arr.length; k++) {
//             sumRight += arr[k]
//         }
//         if (sumLeft === sumRight) {
//             return true;
//         }
//     }
//     return false;
// }

console.log(balancePoint([1, 2, 3, 4])); // should log false
console.log(balancePoint([3, 4, 2, 5]));
// should log true (between indices 1 and 2)


/**
 * takes in an array of numbers
 * returns an integer
 * if there is an index in which the summed values
 * on each side are equal, return it
 * otherwise, return -1
 */
  
// function balanceIndex(arr) {
//     for(var i=0;i<arr.length;i++){
//         var sumright=0;
//         var sumleft= 0;       
//         for(var j=i+1; j<arr.length;j++){
//             sumright = sumright + arr[j]
//         }
//         for(var k=0; k<i;k++){
//             sumleft= sumleft + arr[k]
//         }
//         if(sumright===sumleft){
//             return i;
//         }
//     }
//     return -1
// }

function balanceIndex(arr) {
    for(var i=0;i<arr.length;i++){
        if(sum(arr,i+1,arr.length) === sum(arr,0,i-1)){
            return i
        }
    }
    return -1
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // should log 2
console.log(balanceIndex([9, 9])); // should log -1