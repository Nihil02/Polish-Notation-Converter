import infixPrefix from "../src/infixPrefix";
import infixPostfix from "../src/infixPostfix";
import { describe, expect, it } from "vitest";

describe("postfix", () => {
  it("test 1", () => {
    expect(infixPostfix("(a+b)")).toBe("ab+");
  });
  it("test 2", () => {
    expect(infixPostfix("a+b-c")).toBe("ab+c-");
  });
  it("test 3", () => {
    expect(infixPostfix("((a-b)-c*(d/e))")).toBe("ab-cde/*-");
  });
  it("test 4", () => {
    expect(infixPostfix("x=a")).toBe("xa=");
  });
});

describe("prefix", () => {
  it("test 1", () => {
    expect(infixPrefix("(a+b)")).toBe("+ab");
  });
  it("test 2", () => {
    expect(infixPrefix("a+b-c")).toBe("-+abc");
  });
  it("test 3", () => {
    expect(infixPrefix("((a-b)-c*(d/e))")).toBe("--ab*c/de");
  });
  it("test 4", () => {
    expect(infixPrefix("x=a")).toBe("=xa");
  });
});

describe("input", () => {
  it("test 1", () => {
    expect(infixPrefix("[a+b]")).toBe("+ab");
  });
  it("test 2", () => {
    expect(infixPrefix("a+b- c")).toBe("-+abc");
  });
});
