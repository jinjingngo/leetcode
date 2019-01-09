# [811. Subdomain Visit Count](https://leetcode.com/problems/subdomain-visit-count/description/)

## Description

A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.  

Now, call a "count-paired domain" to be a count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.  

## Example 1

```javascript
Input: ["9001 discuss.leetcode.com"]
Output: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation: We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.
```

## Example 2

```javascript
Input: ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output: ["901 mail.com, "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"]
Explanation: Well will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.
```

## Note

- The length of `cpdomains` will not exceed `100`.
- The length of each domain name will not exceed `100`.
- Each address will have either 1 or 2 "." characters.
- The input count in any count-paired domain will not exceed `10000`.
- The answer output can be reutrned in any order.

## Solution

```javascript
/**
 * @param {String[]} cpdomains
 * @returns {String[]}
 */
const subdomainVisits = (cpdomains) => {
  const map = new Map();
  const outcome = [];
  for (let paire of cpdomains) {
    const space = paire.indexOf(' ');
    const visit = parseInt(paire.substr(0, space));
    const domain = paire.substr(space + 1);
    const length = domain.length;
    const beenVisit = map.get(domain) ? map.get(domain) : 0;
    map.set(domain, beenVisit + visit);
    for (let i = 0; i < length; i++) {
      if (domain.charAt(i) === '.') {
        const subdomain = domain.substr(i + 1);
        const subvisit = map.get(subdomain) ? map.get(subdomain) : 0;
        map.set(subdomain, subvisit + visit);
      }
    }
  }
  for (let [key, value] of map) {
    outcome.push(`${value} ${key}`);
  }
  return outcome;
};
```

This is a `Map` problem.

1. destructure array elements into map.
2. mean time set the element level domain visit status.
3. set subdomain visit status.