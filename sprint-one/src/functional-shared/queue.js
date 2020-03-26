var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {startingIndex : 0}
  return _.extend(storage, queueMethods);
};

var queueMethods = {
  enqueue : function(value) {
    
  },

  dequeue : function() {

  }, 

  size: function(){
    return Object.keys(this).length - 4; 
  }

};


