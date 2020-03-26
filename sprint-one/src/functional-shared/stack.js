var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  return _.extend(storage, stackMethods);

};

var stackMethods = {
  push : function(value) {
    //this code works because size increases every time a value is pushed
    this[this.size()] = value;
  },

  pop : function(){
    var deleted = this[this.size() - 1];
    delete this[this.size() - 1];
    return deleted;
  },

  size : function(){
    return Object.keys(this).length - 3;
  }

};



