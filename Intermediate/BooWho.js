/* jshint esversion: 6 */

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return Boolean(bool) === bool;
}

booWho(null);

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/