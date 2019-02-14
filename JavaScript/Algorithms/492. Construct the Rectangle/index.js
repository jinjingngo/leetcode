/**
 * @param {Number} area
 * @returns {Array}
 */
const constructRectangle = (area) => {
  let w = parseInt(Math.sqrt(area));
  while (area % w != 0) w--;
  return [area / w, w];
}

const area = 4;
const LW = constructRectangle(area);
console.log(`The optimal Length and Width of area ${area} is ${JSON.stringify(LW)}`);