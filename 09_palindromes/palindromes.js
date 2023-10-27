const palindromes = function (str) {
    var newstr = str.replace(/[\.,?!]/g, '').replace(/ /g, '').toLowerCase();
    console.log(newstr);

    for (i = 0; i < newstr.length; i ++) {
        console.log(newstr[i], newstr[newstr.length - 1 - i]);
        if (newstr[i] != newstr[newstr.length - 1 - i]) return false;
    }

    return true;
};

//npm test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;
