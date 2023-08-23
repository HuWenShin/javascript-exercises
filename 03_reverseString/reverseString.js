const reverseString = function(string) {
    let output = '';
    let length = string.length;
    for (i = length - 1; i >= 0; i --) {
        output += string.charAt(i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
