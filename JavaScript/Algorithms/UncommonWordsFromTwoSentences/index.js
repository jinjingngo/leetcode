/**
 * @param {String} A
 * @param {String} B
 * @returns {Array}
 */
const uncommonFromSentences = (A, B) => {
  // concat two strings in the same pattern (space gapped)
  const merge = A.concat(' ', B);
  const sentences = merge.split(' ');
  // filter out the common word using the indexOf function
  const common = sentences.filter((word, index, list) => list.indexOf(word) !== index);
  // filter out the uncommon using the common words through the whole sentance.
  const uncommon = sentences.filter(word => !common.includes(word));
  return uncommon;
};

const A = 'this apple is sweet';
const B = 'this apple is sour';
const uncommons = uncommonFromSentences(A, B);
console.log(uncommons);
