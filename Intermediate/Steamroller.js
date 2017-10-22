/* jshint esversion: 6 */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? steamrollArray(current) : current);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
