var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var newQueue = Object.create(queueMethods);
  //return newQueue;
  this.storage = {};
};


  Queue.prototype.enquesize = 0,

  Queue.prototype.dqsize = 0,

  Queue.prototype.enqueue = function(value) {
    this[this.enquesize] = value;
    this.enquesize ++;
  }

  Queue.prototype.dequeue = function() {
    var deleted = this[this.dqsize];
    delete this[this.dqsize];
    this.dqsize ++;
    return deleted;
}

  Queue.prototype.size = function(){
    let arr = Object.keys(this);

    if (arr.includes('enquesize') && arr.includes('dqsize')){
      return Object.keys(this).length -3;
    }
    else if (arr.includes('enquesize') || arr.includes('dqsize')){
      return Object.keys(this).length - 2;
    }
    else if (!arr.includes('enquesize') || !arr.includes('dqsize')){
      return Object.keys(this).length - 1;
    }
  }


