/* jshint esversion: 6 */

function translatePigLatin(str) {
    if (/^[aeiouy]/.test(str)) {
        return str + "way";
    } else {
        const cons = str.match(/^[^aeiouy]+/g);
        return str.slice(cons.toString().length) + cons + "ay";
    }
}

translatePigLatin("glove");

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/