//原型链继承

class A {
  constructor(name){
    this.name = name
  }
}

class B extends A{
  constructor(){
    super();
  }
}
