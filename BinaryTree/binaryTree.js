var bNode = {
  data: null,
  left: null,
  right: null
}

var BinaryTree = {
  root: null,
  add: function(data) {
    var newNode = Object.create(bNode);
    newNode.data = data;

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.placeNewNode(this.root, newNode);
    }
  },
  placeNewNode: function(current, node) {
    if (node.data > current.data) {
      if (current.right !== null) {
        this.placeNewNode(current.right, node);
      } else {
        current.right = node;
      }
    } else {
      if (current.left !== null) {
        this.placeNewNode(current.left, node);
      } else {
        current.left = node;
      }
    }
  },
  search: function(data, current = this.root) {
    if (current.data === data) {
      // console.log('found');
      return true;
    } else if (current.right === null && current.left === null) {
      // console.log('not found');
      return false;
    } else if (data > current.data) {
      this.search(data, current.right);
    } else {
      this.search(data, current.left);
    }
  },
  remove: function(data) {
    // incomplete
    
    console.log(this.search(data));
  }
}
