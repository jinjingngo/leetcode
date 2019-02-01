const RecentCounter = function () {
  this.pings = [];
};

/**
 * @param {Number} t
 * @returns {Number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings.unshift(t);
  const pings = this.pings;
  const pingsSince = pings.filter(p => t - p <= 3000);
  return pingsSince.length; 
};

/**
 * Your RecentCounter object will be instatiated and called as such:
 * var obj = Object.create(RecentCounter).createNew();
 * var param_1 = obj.ping(t);
 */