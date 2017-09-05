
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var check = str.substr((str.length - target.length), target.length);
    if (check == target) {
        return true;
    }

    return false;
}

confirmEnding("Bastian", "n");
