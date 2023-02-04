import { RotatingShape } from "../src/RotatingShape.mjs";
export class Block extends RotatingShape {
  color;
  x;
  y;

  constructor(color) {
    super(color);
    this.color = color;
  }
}
