/* jshint esversion: 6 */
function chunkArrayInGroups(arr, size) {
    let chunks = [];
    let i = 0;

    while (i < arr.length) {
        chunks.push(arr.slice(i, i + size));
        i += size;
    }
    return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);