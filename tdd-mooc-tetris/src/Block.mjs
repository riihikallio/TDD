import { RotatingShape } from "../src/RotatingShape.mjs";
export class Block extends RotatingShape {
  x;
  y;

  constructor(color) {
    super(color);
  }
}
