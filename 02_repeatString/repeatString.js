const repeatString = function(string, num) {
    let s = string;
    let ss = '';
    if (num < 0) {
        ss = 'ERROR';
    } else {
        for (i = 0; i < num; i++) {
            ss += s;
        }
    }
    return ss;
};

// Do not edit below this line
module.exports = repeatString;
