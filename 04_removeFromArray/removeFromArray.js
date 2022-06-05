const removeFromArray = function(arr, ...num) {
    for (i = 0; i < num.length; i++) {

        for (o = 0; o < arr.length; o++) {
            if (arr[o] === num[i]) {
                arr.splice(o, 1);
            }
        }

    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
