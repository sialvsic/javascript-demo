/*
add(1)(2)(3) = 6
add(1, 2, 3)(4) = 10
add(1)(2)(3)(4)(5) = 15
*/

function _add(a) {
  return function(b) {
    return a + b;
  }
}

function add() {
  let _args = [].slice.call(arguments);
  let adder = function() {

    let _adder = function() {
      [].push.apply(_args, [].slice.call(arguments));
      return _adder;
    };

    _adder.toString = function() {
      return _args.reduce(function(a, b) {
        return a + b;
      });
    };

    return _adder;
  };

  return adder.apply(null, [].slice.call(arguments))
}


function add1(){
  let args = [].slice.call(arguments);

  function name() {
    let _add = () => {

    };

    _add.toString()

    return _add;
  }

  return name.apply(null, [].slice.call(arguments))
}

// 输出结果，可自由组合的参数
// console.log(add(1, 2, 3, 4, 5));  // 15
// console.log(add(1, 2, 3, 4)(5));  // 15

console.log(add(1)(2)(3)(4)(5));  // 15

var currying = function(fn) {
  let args = [].slice.call(arguments, 1);

  return function() {
    let _args = args.concat([].slice.call(arguments))
    return fn.apply(null, _args)
  }
};

let sum = currying(function() {
  let args = [].slice.call(arguments);
  return args.reduce(function(a, b) {
    return a + b;
  })
});

console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum(1)(2)(3)(4)(5));  // 15
