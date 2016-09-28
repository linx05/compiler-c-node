global._ = require('lodash');
global.fs = require('fs');
global.path = require('path');



let fileName = process.argv[2];
let parser = require("node-c-parser");
let lexer = require("node-c-lexer");

const lexical = require('./lexical');

const stateLexer = require('./lexical/state-lexer');

let tokens = lexical.generateTokens(path.normalize(fileName));

//fs.readFile(path.normalize(fileName),(err,data)=>{
//    var tokens = parser.lexer.lexUnit.tokenize(data);
//    console.log(tokens);
//});

//lexical.generateTokens(fileName);