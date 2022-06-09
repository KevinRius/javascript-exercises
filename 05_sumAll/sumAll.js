const sumAll = function(f, s) {
    let r = 0;
    let low = 0;
    let high = 0;

    if (typeof(s) !== "number") {
        return "ERROR";
    } else if (f < 0 || s < 0) {
        return "ERROR";
    } else if (f < s) {
        low = f;
        high = s;
    } else {
        low = s;
        high = f;
    }

    for (i = low; i <= high; i++) {
        r += i;
    }
    return r;
};

// Do not edit below this line
module.exports = sumAll;
