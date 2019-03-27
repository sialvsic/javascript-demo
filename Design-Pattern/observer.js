function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  this.observerList.push(obj)
};

ObserverList.prototype.empty = function() {
  this.observerList = [];
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  return this.observerList[index]
};

ObserverList.prototype.insert = function(object, index) {
  var point = -1;
  if(index === 0) {
    this.observerList.unshift(object)
  } else if(index === this.observerList.length) {
    this.observerList.push(object)
  }
  return point;
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex, point = -1;
  while (i < this.observerList.length) {
    if(this.observerList[i] === obj) {
      point = i;
    }
    i++;
  }

  return point;
};

ObserverList.prototype.removeIndexAt = function(index) {
  if(index === 0) {
    this.observerList.shift();
  } else if(index === this.observerList.length - 1) {
    this.observerList.pop();
  }

  return point;
};

function extend(obj, extension) {
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      extension[key] = obj[key]
    }
  }
}

//模拟目标
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer)
};

