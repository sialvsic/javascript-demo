function curry(func) {
  var fixedArgs = [].slice.call(arguments, 1);
  return function() {
    let args = fixedArgs.concat([].slice.call(arguments));
    return func.apply(null, args);
  };
}


function currying(fn) {
  let allArgs = [];

  return function next() {
    let args = [].slice.call(arguments);

    if(args.length > 0) {
      allArgs = allArgs.concat(args);
      return next;
    } else {
      return fn.apply(null, allArgs);
    }
  }
}

var add = currying(function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
});


add(1)(2, 3)(4)()