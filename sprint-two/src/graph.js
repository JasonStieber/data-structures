

// Instantiate a new graph
var Graph = function() {
//   this.node = {value: null, edges: []};
  this.nodes = {};
  this.dir = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
  this.dir.push(node);  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var exist = false;
  this.forEachNode(function (eachspot) {
    console.log("How many times thorught");
    if (eachspot === node) {
      exist = true;
    }
  });
  return exist;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes[node].length; i++) {
    var connection = this.nodes[node][i];
    this.removeEdge(node, connection);          // removes all edges
  } for (var j = 0; j < this.dir.length; j++) { // removes the node from our database 
    if (this.dir[j] === node) {
      this.dir[j] = null;
    }
  }
  delete this.nodes[node];                      // deleates the node from teh array
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].indexOf(toNode);
  this.nodes[fromNode].splice(index, 1);
  
  index = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode].splice(index, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.dir.length; i++) {  // grabbing a list of all the keys in nodes {}
   // console.log('how big is our array of nodes ')
    console.log('huston we have a problem ' + this.dir[i]);
    if (this.dir[i] !== undefined) {                // making sure that the key still exists
      console.log('deo we get into our if?' + this.dir[i]);
        cb(this.dir[i]);             // calling our call back functions on the node's key
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


