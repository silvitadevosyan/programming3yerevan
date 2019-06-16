var LiveForm = require("./LiveForm");

module.exports = class Extra extends LiveForm{
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
    

    left() {
        if (matrix[this.y][this.x-1]==0) {
            matrix[this.y][this.x] = 0
            this.x--;
            matrix[this.y][this.x] = 6
        }

    }
    right() {
        if (matrix[this.y][this.x+1]==0) {
            matrix[this.y][this.x] = 0
            this.x++;
            matrix[this.y][this.x] = 6
        }
    }
    up() {
        if (matrix[this.y-1][this.x]==0) {
            matrix[this.y][this.x] = 0
            this.y--;
            matrix[this.y][this.x] = 6
        }
    }
    down() {
        if (matrix[this.y+1][this.x]==0) {
            matrix[this.y][this.x] = 0
            this.y++;
            matrix[this.y][this.x] = 6
        }
    }
}