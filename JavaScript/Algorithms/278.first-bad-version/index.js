/**
 * @param {Number} version - version number
 * @returns {Boolean} - whether the version is bad
 */
// const isBadVersion = version => {};

/**
 * @param {Function} isBadVersion
 * @returns {Function}
 */
const solution = (isBadVersion) => {
  return n => {
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on right side of mid
      }
    }
    return start;
  };
};
