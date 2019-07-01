function Animal(special) {
  this.special = special;
}

Animal.prototype.getAge = function () {
  return this.age;
};

function Cat() {
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; // 将Cat.prototype.constructor重新指向本身

/**
 * 测试代码
 */
let cat = new Cat();
cat.getAge(); // output: Animal
console.log(cat.prototype);
console.log(cat.species); // undefined
