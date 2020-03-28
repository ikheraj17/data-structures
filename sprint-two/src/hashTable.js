



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //gives us a index value for k
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if statement to check if index DOES NOT exists


  // if(!index){

    // var bucket = [];
    // bucket.push([index, v]);
    // console.log(bucket)
    // return this._storage.set(index, bucket);

    var bucket = this._storage.get(index);
    if(bucket === undefined){
      bucket = [];
      this._storage.set(index, bucket);
    };

     var exists = false;
    for(var i = 0 ; i < bucket.length; i ++){
      if(bucket[i][0] === k){
        bucket[i][1] = v;
        exists = true;
        break;
      }
    }

    if (!exists){
      bucket.push([k,v]);
    }

  // }
  //yes, create "bucket array", put (index,v) into bucket;
  //no (does exist already), put (index, v) array into bucket (maybe push?)

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //desired bucket needs to be targeted
  var targetBucket = this._storage.get(index);
  //iterate over target bucket
  for (var i = 0; i < targetBucket.length; i ++){
    var tuples = targetBucket[i];
    if(tuples[0] === k){
      return tuples[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //select desired bucket
  var targetBucket = this._storage.get(index);
  //iterate over target bucket
  for(var i =0; i < targetBucket.length; i ++){
    var tuples = targetBucket[i];
    if(tuples[0] === k){
      targetBucket.splice(i,1);
    }
  }
};

