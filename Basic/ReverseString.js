function reverseString(str) {
    var tmpStr = str.split("");
    tmpStr.reverse();
    str = tmpStr.join("");
    return str;
}

reverseString("hello");