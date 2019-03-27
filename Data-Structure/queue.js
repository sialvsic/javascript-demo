function queue() {
  let items = []
}

//进队
queue.prototype.push = function(item) {
  this.items.push(item)
};

//出队
queue.prototype.push = function() {
  return this.items.shift()
};

//获取队首元素
queue.prototype.front = function() {
  return this.items[0]
};

//获取队尾元素
queue.prototype.end = function() {
  return this.items[this.items.length - 1]
};

//队列大小
stack.prototype.size = function() {
  return this.items.length;
};

//队列否为空
stack.prototype.isEmpty = function() {
  return this.items.length === 0;
};

//队列清空
stack.prototype.clear = function() {
  return this.items.length = 0;
};

