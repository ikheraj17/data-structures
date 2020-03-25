var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    if(Object.keys(storage).length < 1){
      return 0;
    }else{
      return Object.keys(storage).length;
    }
  };

  return someInstance;
};
