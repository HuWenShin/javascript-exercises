const leapYears = function(year) {
    if (year % 4 === 0) {
        //check 100
        if (year % 100 === 0) {
            //check 400
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
        
};

// Do not edit below this line
module.exports = leapYears;
