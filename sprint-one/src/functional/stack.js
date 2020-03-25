var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  //push adds a property to the someInstance object
  someInstance.push = function(value) {
    //uses size as a key and the input value to create a new someInstance property.
    storage[size] = value;
    //the size variable is positioned to be the key for the next property
    size ++;
  };


  someInstance.pop = function() {
    //if size is greater than 0
    if(size > 0){
      //decrease size by 1
      size --;
      //create an alias to store the last key value pair
      let current = storage[size];
      //delets that key valeu pair from storage
      delete storage[size];
      //returns the key value pair
      return current;
    }


  };

  // gets the current size of the someInstance object.
  someInstance.size = function() {
    return size;
  };

  return someInstance;
};




