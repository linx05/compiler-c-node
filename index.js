const fs = require('fs');
const path = require('path');
let fileName = process.argv[2];
const lexical = require('./lexical');
var parser = require("node-c-parser");
var lexer = require("node-c-lexer");

//fs.readFile(path.normalize(fileName),(err, data)=>{
//        lexical.generateTokens(data);
//    //var tokenStream = lexer.lexUnit.tokenize(data);
//    //console.log(tokenStream);
//});

fs.readFile(path.normalize(fileName),(err,data)=>{
    var tokens = parser.lexer.lexUnit.tokenize(data);
    console.log(tokens);
});

lexical.generateTokens(fileName);