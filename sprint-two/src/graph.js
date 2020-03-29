//this.node.fromnode.tonode

// Instantiate a new graph
var Graph = function() {
    this.newGraph = {
  
    };
  };
  // Add a node to the graph, passing in the node's value.
  Graph.prototype.addNode = function(node) {
    this[node] = [];
  };
  
  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  Graph.prototype.contains = function(node) {
    //search for a key, if we find it, return true, else false
    for (let key in this){
      if(key == node){
        return true;
      }
      return false;
    }
  };
  
  // Removes a node from the graph.
  Graph.prototype.removeNode = function(node) {
  
    for (let key in this){
      if(key == node){
        delete this[key];
      }
    }
  };
  
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  Graph.prototype.hasEdge = function(fromNode, toNode) {
    if(this[fromNode] && !this[toNode] || this[toNode] && !this[fromNode]){
      return false;
    }
  
    if(this[fromNode].includes(toNode) && this[toNode].includes(fromNode)){
      return true;
    }
    return false;
  };
  
  // Connects two nodes in a graph by adding an edge between them.
  Graph.prototype.addEdge = function(fromNode, toNode) {
  //edge case to make sure both input nodes exists
  //iterate over "this" if(fromNode and toNode exist
  
  if(this[fromNode] && this[toNode]){
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
  //push toNode into fromNode array, and vice versa
  
  };
  
  // Remove an edge between any two specified (by value) nodes.
  Graph.prototype.removeEdge = function(fromNode, toNode) {
    if(this[fromNode].includes(toNode) && this[toNode].includes(fromNode)){
      this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
      this[toNode].splice(this[toNode].indexOf(fromNode), 1);
    }
  };
  
  // Pass in a callback which will be executed on each node of the graph.
  Graph.prototype.forEachNode = function(cb) {
    for (let key in this.newGraph){
      cb(key);
    }
  };
  
  /*
   * Complexity: What is the time complexity of the above functions?
   */


