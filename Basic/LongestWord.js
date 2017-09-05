
function findLongestWord(str) {
    return str.split(" ").reduce(function (a, b) {
        return Math.max(a, b.length);
    }, 0);
}
findLongestWord("The quick brown fox jumped over the lazy dog");