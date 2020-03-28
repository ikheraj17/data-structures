var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

_.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
//create a new instance instance of Tree
let treeChild = Tree(value);
//place it in parent node newTree.children array
//'this' refers to treeMethods, which does not possess the key "children"
//this works because of _.extend, ehich takes methods from TreeMethods and applies
//them to newTree. newTree posesses the key "children", and so the .push method
//works and creates a whole new tree within newTree.
//this is how a parent tree is extended
this.children.push(treeChild)
};

treeMethods.contains = function(target) {
  let regex = RegExp(`${target}`);
  let stringObj = JSON.stringify(this);
  return regex.test(stringObj);//<----stringified object
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
