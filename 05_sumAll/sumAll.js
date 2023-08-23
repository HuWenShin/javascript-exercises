const sumAll = function(num1, num2) {
    let start = 0;
    let fin = 0;
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {
        let sum = 0;
        if (num1 < num2) {
            start = num1;
            fin = num2;
        } else {
            start = num2;
            fin = num1;
        }

        for (i = start; i <= fin; i ++) {
            sum += i;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
