/* jshint esversion: 6 */
/* jshint expr: true */

function mutation(arr) {
    return arr[1].toLowerCase()
        .split("")
        .every((e) => {
            return arr[0].toLowerCase()
                .indexOf(e) === -1 ? false : true;
        });
}

mutation(["hello", "hey"]);
