function _new(obj, args) {
  let newObj = Object.create(obj.prototype);

  let result = obj.apply(newObj, ...args);
  return result instanceof Object ? result : newObj;
}


var People = {
  name: '12',
  height: 180
};


var a = _new(People);

var b = _new();



