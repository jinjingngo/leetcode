/**
 * @param {string[]} words
 * @return {nubmer}
 */

let uniqueMorseRepresentations = function (words) {
  let morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  let seen = new Set();
  let begin = 'a'.charCodeAt(); // charcode of a
  for (let word of words) {
    let code = '';
    for (let char of word) {
      code += morse[char.charCodeAt() - begin];
    }
    seen.add(code);
  }
  return seen.size;
};

let testcase = ['gin', 'zen', 'gig', 'msg'];
let repetation = uniqueMorseRepresentations(testcase);
console.log(repetation);
