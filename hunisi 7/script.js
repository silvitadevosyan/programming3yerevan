// var os = require("os");
// var message = "The platform is ";

// function main(){
//     console.log(message + os);
// }
// main();

// var express = require("express");
// var app = express();

// app.use(express.static("./"));

// app.get("/ananun", function(req, res){
//     res.redirect("https://ananun.pro");
//  });
 
//  app.get("/name/:name", function(req, res){
//      var name = req.params.name;
//     res.send("<h1>Hello " + name + "</h1>");
//  });

//  app.listen(3001, function(){
//     console.log("Example is running on port 3001");
//  });

 var data = require("./data.js");
 console.log(data.name)
 