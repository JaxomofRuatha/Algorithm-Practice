/* jshint esversion: 6 */

function convertToRoman(num) {
    let roman = "";

    const rNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const numVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < numVal.length; i++) {
        while (num >= numVal[i]) {
            roman += rNumeral[i];
            num -= numVal[i];
        }
    }

    return roman;
}


convertToRoman(36);

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper -case.
*/