class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.index = 3;
        this.multiply = 1;
        this.energy = 2;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy >= 60) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3
            var newGs = new Gishatich(x, y)
            gishatichArr.push(newGs)
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
            matrix[newY][newX] = 3
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
        var gr = random(this.chooseCell(2))
        if (gr) {
            this.energy++;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);
                }
            }

            this.y = newY
            this.x = newX
            if (this.energy >= 15) {
                this.mult()
            }
        }
        else {
            this.move()
        }
    }
    die() {

        matrix[this.y][this.x] = 0
        for (var i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1);
            }
        }
    }
}