var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];  // fix me say please

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var theForest = [this];
  for (var i = 0; i < theForest.length; i++) {
    if (theForest[i].children !== null) {
      theForest = theForest.concat(theForest[i].children);
    }
  } for (var j = 0; j < theForest.length; j++) {
    if (theForest[j].value === target) {
      return true;
    }
  } return false; 
}; 

/*
 * Complexity: What is the time complexity of the above functions?
 */
