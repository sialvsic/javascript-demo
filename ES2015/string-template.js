//标记模板字符串
function fn(string, substitute) {
  console.log(string);
  console.log(substitute);
  if(substitute === 'ES6') {
    substitute = 'ES2015'
  }

  return substitute + string[1];
}


const version = 'ES6';
const result = fn`${ version } was a major update`;

console.log(result);
