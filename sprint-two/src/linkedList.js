var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null && this.head === null) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      var tempNode = Node(value);
      this.tail.next = tempNode;
      tempNode.previous = this.tail;
      this.tail = tempNode;
    }
  };

  list.removeHead = function() {
    var tempNode = this.head;    
    if (this.head.next !== null) {
      this.head = tempNode.next; 
      this.head.next = null;
      return tempNode.value;
    } else if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return tempNode.value;  
    }
  };

  list.contains = function(target) {
    var element = this.head;
    while (element !== null) {
      if (element.value === target) {
        return true;
      } else {
        element = element.next;
      } 
    } return false;
  };

  list.addToHead = function(value) {
    var currentHead = this.head;
    this.head = Node(value);
    this.head.next = currentHead;
    this.head.previous = null;  
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
