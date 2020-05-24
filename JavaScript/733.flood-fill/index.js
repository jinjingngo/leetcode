/**
 * @param {number[][]} image
 * @param {number} sr 
 * @param {number} sc 
 * @param {number} newColor 
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  const oldColor = image[sr][sc];
  if (oldColor === newColor) return image;
  const fill = (image, x, y, oldColor, newColor) => {
    if (x < 0 
      || y < 0 
      || x >= image.length 
      || y >= image[x].length
      || image[x][y] === newColor
      || image[x][y] !== oldColor) {
      return;
    }
    image[x][y] = newColor;
    fill(image, x + 1, y, oldColor, newColor);
    fill(image, x, y + 1, oldColor, newColor);
    fill(image, x - 1, y, oldColor, newColor);
    fill(image, x, y - 1, oldColor, newColor);
  };

  fill(image, sr, sc, oldColor, newColor);
  return image;
}

const image = [[1,1,1],[1,1,0],[1,0,1]];
const sr = 1;
const sc = 1;
const newColor = 2;
const result = floodFill(image, sr, sc, newColor);
console.log(result);