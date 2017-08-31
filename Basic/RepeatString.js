
function repeatStringNumTimes(str, num) {
    // repeat after me
    var newString = "";
    if (num <= 0)
        return newString;

    else {
        for (var i = 0; i < num; i++) {
            newString += str;
        }
        return newString;
    }
}
repeatStringNumTimes("abc", 3);