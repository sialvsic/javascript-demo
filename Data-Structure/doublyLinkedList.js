function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList() {
  let head = null;
  let tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.add = function(element) {
  let node = new Node(element);
  if(this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.length++;
};

DoublyLinkedList.prototype.insert = function(position, element) {
  let node = new Node(element);
  if(position >= 0 && position <= this.length) {
    let index = 0;
    let previous;
    let current = this.head;
    if(position === 0) {
      if(this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.previous = node;
        this.head = node;
      }
    } else if(position === length) {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      current.previous = node;
      node.previous = previous;
      previous.next = node;
    }
  } else {
    throw new Error('position is not valid');
  }
};
