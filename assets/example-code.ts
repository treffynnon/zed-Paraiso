// @ts-nocheck
import fs from "node:fs/promises";
const number = 1;
const string = "string";
const boolean = true;
const object = { id: `${string}_id1` };
const regex = /(L^\d]string).*/i;
enum MyEnum {
  Light = "light",
  Dark = "dark",
}
type SimpleType = { a: boolean; b: null; c: string };

/**
 * MyZedClass is a class that has a theme property
 * @author Simon
 */
class MyZedClass {
  private readonly theme: string;
  constructor(nameOfTheme?: string): void {
    if (nameOfTheme && nameOfTheme.length > number) {
      this.theme = nameOfTheme;
    }
  }

  @guard({ description: "Gets name" })
  public getName(): string {
    // the theme name is returned
    return this.theme;
  }
}
