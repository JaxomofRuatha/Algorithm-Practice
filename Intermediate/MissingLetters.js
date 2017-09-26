/* jshint esversion: 6 */

function fearNotLetter(str) {
    let missing = "";

    str.split("").map((char, index, arr) => {

        if (arr[index + 1] !== undefined) {
            if (char.charCodeAt(0) + 1 !== arr[index + 1].charCodeAt(0)) {
                missing += String.fromCharCode(char.charCodeAt(0) + 1);
            }
        }

    });

    if (missing === "") {
        return undefined;
    }
    
    return missing;

}

console.log(fearNotLetter("abce"));

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/