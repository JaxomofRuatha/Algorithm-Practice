/* jshint esversion: 6 */

function convertHTML(str) {
    // &colon;&rpar;
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, "&apos;");
}

convertHTML("Dolce & Gabbana");

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
&amp; &lt; &gt; &quot;
*/