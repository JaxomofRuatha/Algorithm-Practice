
function titleCase(str) {
    var caseArray = str.toLowerCase().split(" ");
    console.log(caseArray);
    str = caseArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return str.join(" ");
}

titleCase("I'm a little tea pot");