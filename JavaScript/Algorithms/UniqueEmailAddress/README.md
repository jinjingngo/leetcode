# [929. Unique Email Address](https://leetcode.com/problems/unique-email-addresses/description/)

## Description
Every small consists of a local name and a domain name, separated by the @ sing.  

For example, in `alice@leetcode.com`, `alice` is the local name, and `leetcode.com` is the domain name.  

Besides lowercase letters, these emails may contain `.`s or `+`s.  

If you add periods(`.`) between some characters in the **local name** part of an email address, mail sent there will be forwarded to the same address withoud dots in the local name. For example, `alice.z@leetcode.com` and `alicez@leetcode.com` forward to the same email address. (Note that this rule does not apply for domain names.)  

If you add a plus(`+`) in the **local name**, everything after the first plus sign will be **ignored**. This allows certain emails to be filtered, for example `m.y+name@email.com` will be forwarded to `my@email.com`. (Again, this rule does not apply for domain names.)  

It is possible to use both of these rules at the same time.  

Given a list of `emails`, we send one email to each address in the list. How many different address actually receive mails?

## Example 1
```
Input: ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@leet.tcode.com']
Output: 2
Explanation: 'testmail@leetcode.com', 'testemail@lee.tcode.com'
```

## Note
- `1 <= emails[i].length <= 100`
- `1 <= emails.length <= 100`
- Each `emails[i]` contains exactly one `@` character

```javascript
/**
 * data structure Set usage
 * @param {Array} emails
 * @returns {number}
 */
const numUniqueEmails = (emails) => {
	const divider = (email, symbol) => email.split(symbol);
	const ignorer = (local, domain) => {
		return `${local.includes('+') ? local.split('+')[0] : local}@${domain}`;
	};
	const periodless = (local, domain) => {
		return `${local.replace(/\./g, '')}@${domain}`;
	};
	const splited = emails.map(email => divider(email, '@'));
	const ignored = splited.map(item => ignorer(item[0], item[1]));
	const locals = ignored.map(email => divider(email, '@'));
	const duplicators = locals.map(item => periodless(item[0], item[1]));
	const unique = new Set(duplicators);
	return unique.size;
};

const emails = [ 'test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@leet.tcode.com' ];
const number = numUniqueEmails(emails);
console.log(number);

```