var Grass = require("./modules/class.Grass.js");
var Xotaker = require("./modules/class.Xotaker.js");
var Gishatich = require("./modules/class.Gishatich.js");
var GrassGen = require("./modules/class.GrassGen.js");
var Dinosaur = require("./modules/class.Dinosaur.js");
var Extra = require("./modules/class.Extra.js");

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var genArr = [];
var dinoArr = [];
var extArr = [];

matrix = [];
grassHashiv = 0;

let random = require('./modules/random');

function matrixGenerator(matrixSize, grassArr, xotakerArr, gishatichArr, genArr, dinoArr, extArr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grassArr; i++) {
        let customX = Math.floor(random(matrixSize)); // 0 - 39
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < xotakerArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatichArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < genArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < dinoArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < extArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(10, 5, 1);


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);




function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var Xotaker = new Xotaker(x, y);
                xotakerArr.push(Xotaker);
            }
            if (matrix[y][x] == 3) {
                var Gishatich = new Gishatich(x, y);
                gishatichArr.push(Gishatich);
            }
            if (matrix[y][x] == 4) {
                var GrassGen = new GrassGen(x, y);
                genArr.push(GrassGen);
            }
            if (matrix[y][x] == 5) {
                var Dinosaur = new Dinosaur(x, y);
                dinoArr.push(Dinosaur);
            }
            if (matrix[y][x] == 6) {
                var Extra = new Extra(x, y);
                extArr.push(Extra);
            }
            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
        }
    }
}
creatingObjects();



function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (xotakerArr[0] !== undefined) {
        for (var i in xotakerArr) {
            xotakerArr[i].eat();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
        }
    }

    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv
    }

    io.sockets.emit("data", sendData);
}

setInterval(game, 1000)