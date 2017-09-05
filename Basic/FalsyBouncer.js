/* jshint esversion: 6*/

function bouncer(arr) {
    return arr.filter((type) => {
        return type ? true : false;
    });
}

bouncer([7, "ate", "", false, 9]);
