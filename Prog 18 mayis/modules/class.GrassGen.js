var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class GrassGen extends LiveForm {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == character) {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }
    move() {
        var empty = random(this.chooseCell(0));
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4

            let a = Math.floor(Math.random() * 100);
            if (a < 70) {
                matrix[this.y][this.x] = 1;
                let gr = new Grass(this.x, this.y);
                grassArr.push(gr);
            }
            else if (a >= 70 && a < 80) {
                matrix[this.y][this.x] = 2;
                let gr = new Xotaker(this.x, this.y);
                xotakerArr.push(gr);
            }
            else if (a >= 80 && a < 90) {
                matrix[this.y][this.x] = 5;
                let gr = new Dinosaur(this.x, this.y);
                dinoArr.push(gr);
            }
            else {
                matrix[this.y][this.x] = 3;
                let gr = new Gishatich(this.x, this.y);
                gishatichArr.push(gr);
            }


            this.x = newX;
            this.y = newY;
        }
    }
}
