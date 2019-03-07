class Single {
  static obj;

  static create() {
    if(!obj) {
      obj = new Single();
    }
    return obj;
  }
}

let a = {};

let b = Single.create();
