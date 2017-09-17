/* jshint esversion: 6 */

function sumAll(arr) {
    const high = Math.max(...arr);
    const low = Math.min(...arr);

    return (high - low + 1) * (low + high) / 2;
}

sumAll([1, 4]);