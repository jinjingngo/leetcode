const reorderLogFiles = (logs) => {
  const isDigitalLog = log => (/[0-9]/i).test(log[log.indexOf(' ') + 1]);
  const digitalLogs = logs.filter(log => isDigitalLog(log));
  const letterLogs = logs.filter(log => !isDigitalLog(log));
  const sorttor = (a, b) => {
    const aWithoutId = a.substr(a.indexOf(' '), a.length);
    const bWithoutId = b.substr(b.indexOf(' '), b.length);
    return aWithoutId.localeCompare(bWithoutId);
  }
  letterLogs.sort(sorttor);
  return [...letterLogs, ...digitalLogs];
}

const logs = ['a1 9 2 3 1', 'g1 act car', 'zo4, 4 7', 'ab1 off key dog', 'a8, act, zoo'];
const orderedLogs = reorderLogFiles(logs);
console.log(JSON.stringify(logs));
console.log(JSON.stringify(orderedLogs));