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
  // var disTree = this;
  // var exists = false;
  // if (disTree.value === target) {
  //    return true;
  // }
  // for( var i = disTree.children.length; i++) {
  //   if (disTree.children[i].value === target){
  //     return exits || disTree[];
  //   }    
    
  // }
   
  // else {
  //   var exist = false;
  //   for (var i = 0; i < this.children.length; i++) {
  //     var bbT = this.children[i];//stands for BabyTree
  //     exist = bbT.contains(target);  
  //   }
  // }
  var theForest = [this].concat(this.children);
  for (var i = 1; i < theForest.length; i++) {
    if (theForest[i].children !== null) {
      theForest = theForest.concat(theForest[i].children);
    } console.log('how many trees in the forest')
  } for (var j = 0; j < theForest.length; j++) {
    if (theForest[j].value === target) {
      return true;
    }
  } return false;
      
}; 

/*
 * Complexity: What is the time complexity of the above functions?
 */
