/* jshint esversion: 6 */

function rot13(str) { // LBH QVQ VG!

  return str.replace(/[A-Z]/g, (patMatch) => {
    return String.fromCharCode((patMatch.charCodeAt(0) % 26) + 65);
  });
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");