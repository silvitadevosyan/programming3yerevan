class Xotaker extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 40;
        this.index = 2;
    }
// class Xotaker {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.index = 2;
//         this.multiply = 0;
//         this.energy = 40;
//         this.directions = [];
//     }
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
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var newXt = new Xotaker(x, y)
            xotakerArr.push(newXt)
            this.energy = 5
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
        if (this.energy <= 0) {
            this.die()
        }
    }
    eat() {

        var gr = random(this.chooseCell(1))
        if (gr) {
            this.energy += 1;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                }
            }

            this.y = newY
            this.x = newX
            if (this.energy >= 30) {
                this.mult()
            }
        }
        else {
            this.move()
        }
    }
    die() {

        matrix[this.y][this.x] = 0
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
            }
        }

    }


}