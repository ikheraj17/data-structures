var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enqInd = 0;
  this.dqInd = 0;
  this.storage = ;
};

Stack.prototype.enqueue = function(value){
  this.storage[this.size()] = value;
}

Stack.prototype.dequeue = function() {
  var deleted = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deleted;
}

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}


