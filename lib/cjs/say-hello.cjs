/**
 * @jacob-ebey/library-boilerplate v1.3.0 build Fri Feb 26 2021
 * https://github.com/jacob-ebey/library-boilerplate
 * Copyright 2021 Jacob Ebey
 * @license MIT
 */
var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
__markAsModule(exports);
__export(exports, {
  sayHello: () => sayHello
});
const sayHello = (name = "World") => console.log(`Hello, ${name}!`);
