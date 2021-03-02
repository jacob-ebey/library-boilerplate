import { sayHello } from "./say-hello";

describe("say-hello", () => {
  it("defaults to 'World'", () => {
    expect(sayHello()).toBe("Hello, World!!");
  });

  it("uses provided name'", () => {
    expect(sayHello("Jacob")).toBe("Hello, Jacob!!");
  });
});
