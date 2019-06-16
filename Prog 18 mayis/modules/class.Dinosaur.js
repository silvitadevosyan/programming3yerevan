var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Dinosaur extends LiveForm{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 5;
        this.multiply = 0;
        this.energy = 2;
        this.directions = [];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
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
    
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy >= 5) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            var dino = new Dinosaur(x, y)
            dinoArr.push(dino)
            this.energy = 2
        }
    }
    move() {
        var move1 = this.chooseCell(0);
        var move2 = this.chooseCell(1);
        let empty = random(move1.concat(move2));
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                }
            }

        }
        if (this.energy <= 0) {
            this.die()
        }
    }
    eat() {
        var move1 = this.chooseCell(2);
        var move2 = this.chooseCell(3);
        let gr = random(move1.concat(move2));
        if (gr) {
            this.energy++;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1);
                }
            }

            this.y = newY
            this.x = newX
            if (this.energy >= 5) {
                this.mult()
            }
        }
        else {
            this.move()
        }
    }
    die() {

        matrix[this.y][this.x] = 0
        for (var i in dinoArr) {
            if (dinoArr[i].x == this.x && dinoArr[i].y == this.y) {
                dinoArr.splice(i, 1);
            }
        }
    }
}