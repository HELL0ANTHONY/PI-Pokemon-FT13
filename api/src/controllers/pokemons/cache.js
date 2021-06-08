function Cache(cache = []) {
  this.cache = cache;
}

Cache.prototype.getLength = function() {
  return this.cache.length;
}

Cache.prototype.setValue = function(value) {
  this.cache = value;
}

Cache.prototype.getValues = function() {
  return this.cache;
} 

module.exports = Cache;
