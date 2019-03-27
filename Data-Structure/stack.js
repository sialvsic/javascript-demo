function stack() {
  let items = []
}

//进栈
stack.prototype.push = function(item) {
  this.items.push(item)
};

//出栈
stack.prototype.pop = function() {
  return this.items.pop()
};

//栈的大小
stack.prototype.size = function() {
  return this.items.length;
};

//栈是否为空
stack.prototype.isEmpty = function() {
  return this.items.length === 0;
};

//获取栈顶元素
stack.prototype.peek = function() {
  return this.items[this.item.length - 1];
};

//栈清空
stack.prototype.clear = function() {
  return this.items.length = 0;
};





