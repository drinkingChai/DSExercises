var LNode = {
  data: null,
  next: null
}

var LinkedList = {
  head: null,
  add: function(data) {
    var newNode = Object.create(LNode);
    newNode.data = data;

    if (this.head === null) {
      this.head = newNode;
    } else {
      var last = this.head;
      while (last.next !== null) {
        last = last.next;
      }

      last.next = newNode;
    }
  },
  addAfter: function(n, data) {
    var i = 0;
    var newNode = Object.create(LNode);
    newNode.data = data;

    var insertAfter = this.head;
    while (insertAfter.next !== null && i !== n) {
      insertAfter = insertAfter.next;
      i++;
    }

    newNode.next = insertAfter.next;
    insertAfter.next = newNode;
  },
  removeAt: function(n) {
    if (n == 0) {
      this.head = this.head.next;
      return;
    }

    var i = 0,
      current = this.head;
    while (current.next.next !== null && i + 1 !== n) {
      current = current.next;
      i++;
    }

    current.next = current.next.next;
  },
  print: function() {
    if (this.head === null) {
      return null;
    } else {
      var last = this.head,
        list = [];
      while (last.next !== null) {
        list.push(last.data);
        last = last.next;
      }

      list.push(last.data);

      return list;
    }
  }
}
