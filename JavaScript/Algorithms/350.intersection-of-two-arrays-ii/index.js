const intersect = (nums1, nums2) => {
  const sorter = (a, b) => a - b;
  nums1.sort(sorter);
  nums2.sort(sorter);
  let i1 = 0;
  let i2 = 0;
  const ln1 = nums1.length;
  const ln2 = nums2.length;
  const intersectors = [];
  while (i1 < ln1 && i2 < ln2) {
    if (nums1[i1] === nums2[i2]) {
      intersectors.push(nums1[i1]);
      i1 += 1;
      i2 += 1;
    } else if (nums1[i1] > nums2[i2]) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }
  return intersectors;
};
const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
const intersectors = intersect(nums1, nums2);
console.log(JSON.stringify(intersectors));
