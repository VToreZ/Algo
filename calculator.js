let person = {
  name : "Alex",
  age : 24,
  sayHello(a, b) {alert(`Hello, ${this.name} ${a} ${b}`)}
}




let calculator = {
  name : "Calvin",
  read : function() {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }

}

person.sayHello.bind(calculator)(5)
