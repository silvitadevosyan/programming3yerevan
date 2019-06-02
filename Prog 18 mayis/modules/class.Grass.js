var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Grass extends LiveForm {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 1;
    }
        getNewCoordinates() {
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
        this.getNewCoordinates();
        return super.chooseCell(character);

        // var found = [];
        // for (var i in this.directions) {
        //     var x = this.directions[i][0];
        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        //         if (matrix[y][x] == character) {
        //             found.push(this.directions[i]);
        //         }
        //     }
        // }
        // return found;
    }
    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply >= 3) {
            grassHashiv++;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var newgr = new Grass(newX, newY, 1);
            grassArr.push(newgr);
            //this.multiply = 0;
        }
    }
}