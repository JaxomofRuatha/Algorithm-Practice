/* jshint esversion: 6 */

function diffArray(arr1, arr2) {

    let newArr = arr1.concat(arr2)
    // Same, same; but different.
    return (newArr.filter((item) => {
        return !arr1.includes(item) || !arr2.includes(item);
    }))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.