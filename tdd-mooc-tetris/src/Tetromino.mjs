import { Tetromino_T } from "../src/Tetromino_T.mjs";
import { Tetromino_I } from "../src/Tetromino_I.mjs";
import { Tetromino_O } from "../src/Tetromino_O.mjs";

export class Tetromino {
    static T_SHAPE = new Tetromino_T();
    static I_SHAPE = new Tetromino_I();
    static O_SHAPE = new Tetromino_O();
}
