var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var storage = {startingIndex : 0}
  var storage = {};
  
  return _.extend(storage, queueMethods);
};

var queueMethods = {

  enquesize : 0,

  dqsize : 0,

  enqueue : function(value) {
    
    //this[this.size()] = value;
    this[this.enquesize] = value;
    this.enquesize ++;

  },

  dequeue : function() {
    
    //var deleted = this[this.startingIndex];
    //delete this[this.startingIndex];
    //return deleted;
    var deleted = this[this.dqsize];
    //this.enquesize --;
    delete this[this.dqsize];
    this.dqsize ++;
    
    return deleted;
}, 

  size: function(){
    return Object.keys(this).length - 5; 
  }

};



//{startingIndex : 0, enqueue : Function(), 
  //dequeue : function(), size : function(), 0 ; a 
//}

//{startingIndex : 0, enqueue : Function(), 
  //dequeue : function(), size : function(), 0 : a 
// 1 : b} //enqsize is now 2

//{startingIndex : 0, enqueue : Function(), 
  //dequeue : function(), size : function() 1 : b}
  //dequeue size is now 1 after deletion, enqueue size is 2

  //{startingIndex : 0, enqueue : Function(), 
  //dequeue : function(), size : function(), 1 :b, 2 : c }

  //1 : b is being replaced by 1 c on the enqueue


