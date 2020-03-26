var Stack = function() {
  //create an object using create
  var newStack = Object.create(stackMethods);
  return newStack;
};

var stackMethods = {
  push : function(value) {
    this[this.size()] = value;

  },
  
  pop : function() {
    var deleted = this[this.size() - 1];
    delete this[this.size() - 1];
    return deleted;
  },
  
  size : function() {
    return Object.keys(this).length;
  }


};
//Stack.prototype = {};

/*Stack.prototype.push = function(value) {
  this[this.size()] = value;
};

Stack.prototype.pop = function() {
  var deleted = this[this.size() - 1];
    delete this[this.size() - 1];
    return deleted;
};

Stack.prototype.size = function() {
  return Object.keys(this).length;
};*/
