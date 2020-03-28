var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    //if head is null, the current
    //value for node will become the head
    this.head = this.head || node;
    //if statement is for
    //if tail has already been defined
    if(this.tail !== null){
      //
      this.tail.next = node;
      //console.log(this.tail.next);
    }
    //for the first element added to list
    //(tail is null), set element as tail
    this.tail = node;
    //console.log(list);
  };

  list.removeHead = function() {
    var formerHead = this.head;
    this.head = this.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {

    let regex = RegExp(`${target}`);
    //stringify object to test for existence of target
    let stringObj = JSON.stringify(this);
    //test occurs here with regular expression, 
    //returns a boolean
    return regex.test(stringObj);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 //
//

//{} here is our list
////adding 4 to tail should update our tail value to be 4, 
//as well as set the head to 4 since this is the first value. 
//we get the value by running Node(4), which provides an object
//that looks like this: {value : 4, next : null}
//so our list now looks like {
  //{value : 4, next : null}
//}