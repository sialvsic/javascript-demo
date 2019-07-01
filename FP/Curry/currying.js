//currying 基本通用式
let currying = function (fn) {
  let args = [].slice.call(arguments, 1);

  return function () {
    // 主要还是收集所有需要的参数到一个数组中，便于统一计算
    let _args = args.concat([].slice.call(arguments));
    return fn.apply(null, _args);
  };
};

let sum = currying(function () {
  let args = [].slice.call(arguments);
  return args.reduce(function (a, b) {
    return a + b;
  });
}, 10);

console.log(sum(10, 2, 5));

//currying 复杂通用式
let curry = function (fn, len) {

  const length = len || fn.length;

  return function (...rest) {
    console.log(rest);
    return rest.length >= length ?
      fn.apply(this, rest) :
      curry(currying.apply(this, [fn].concat(rest), length - rest.length));
  };
};

function sayHello(name, age, fruit) {
  console.log(`我叫${ name }, 我${ age }岁了, 我喜欢吃${ fruit }`);
}

const betterShowMsg = curry(sayHello);
// betterShowMsg('小A', 20, '西瓜');
betterShowMsg('小A')(20, '西瓜');
