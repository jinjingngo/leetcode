# Unique Morse Code Words

## Description
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: `a` maps to `.-`, `b` maps to `-...`, `c` maps to `-.-.`, and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

```JavaScript
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be witten as ".-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.


## Example
Return the number of different tranformations among all words we have.
```
Input: words = ['gin', 'zen', 'gig', 'msg'];
Output: 2
Explanation:
The transformation of each world is:
'gin' -> '--...-.'
'zen' -> '--...-.'
'gig' -> '--...--.'
'msg' -> '--...--.;

There are 2 different transformations, '--...-.' and '--...--.'.
```

## Solutions
```JavaScript
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
```
First come out of my mind is loop the `words` and each character of `word`, concatenation each char in morse, get a morse representation of the `word`, and put that morse representation into a Map as a key, thanks to Map you have unique key feature, WAIT! Set has the same feature too and save the **value** storage space. so above is my solutions.