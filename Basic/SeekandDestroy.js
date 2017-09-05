/* jshint esversion: 6*/

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arguments[0].filter((item) => {
        return !args.includes(item);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);