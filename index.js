function sayHello(name) {
  console.log(`Hello, ${name || "World"}!!`);
}

module.exports = sayHello;
