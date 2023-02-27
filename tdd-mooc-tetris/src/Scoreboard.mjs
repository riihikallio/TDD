export class Scoreboard {
    score;
    points = [0, 40, 100, 300, 1200];

    constructor() {
        this.score = 0;
    }

    update(rows) {
        if (rows >= 0 && rows <= 4) {
            this.score += this.points[rows];
        } else {
            throw Error("Number of rows wrong");
        }
    }

    toString() {
        return this.score.toString();
    }
}