const fs = require('fs');
const path = require('path');
let fileName = process.argv[2];
const lexical = require('./lexical');

var lexer = require("node-c-lexer");

//fs.readFile(path.normalize(fileName),(err, data)=>{
//        lexical.generateTokens(data);
//    //var tokenStream = lexer.lexUnit.tokenize(data);
//    //console.log(tokenStream);
//});

lexical.generateTokens(fileName);