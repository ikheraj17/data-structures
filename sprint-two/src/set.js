var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
 //if this.storage does not have item
 if(!this.contains(item)){
   this.storage.push(item);
 }
 //push item

};

setPrototype.contains = function(item) {
  let regex = RegExp(`${item}`);
  let stringObj = JSON.stringify(this);
  return regex.test(stringObj);
};

setPrototype.remove = function(item) {
  for (let i = 0; i < this.storage.length; i ++){
    let curr = this.storage[i];
    if(curr === item){
      this.storage.splice(i, 1);
    }
  }
};
