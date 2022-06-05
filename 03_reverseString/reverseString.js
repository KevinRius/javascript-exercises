const reverseString = function(str) {
    let string = str;
    let revString = "";
    const arr = string.split("");
    arr.reverse();
    
    for (i = 0; i < arr.length; i++) {
        revString += arr[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
