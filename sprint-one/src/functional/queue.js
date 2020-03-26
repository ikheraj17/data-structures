var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //adds new property to storage using si

    storage[size] = value;
    //adds 1 to size to set it up for next added property key
    size ++;
  };

  someInstance.dequeue = function() {
    if(size > 0){
      //create a variable to reflect the current keys of the object
      let storageKeys = Object.keys(storage);
      console.log(storageKeys);
      //create variable for the last added property value
      let current = storage[storageKeys[0]];
      //deletes first property of the current storage object key set
      delete storage[storageKeys[0]];
      //delete storage[storageKeys.length -1];

      //returns the last added property value
      return current;
      //return storage objects??
    }

  };
// gives size of
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
