const cLexer = require('node-c-lexer');
const _ = require('lodash');
let compiler = require("c-preprocessor");
let readline = require('linebyline');


let generateTokens = (file) => {
    let rl = readline(file);
    rl.on('line', (line, lineCount, byteCount)=> {

        _.map(line, char=> {

        });
    })
};

let analizeState = (char,currentState) => {
    //TODO: RETURN THE STATE AND IF IT RETURNS A TOKEN GENERATE TOKEN
    //PASS TOKEN THROUGH RULE ANALYSIS
};

let generateToken = (lexeme, state) => {
    //TODO: RETURN TOKEN OBJECT
};

exports = module.exports = {
    generateTokens: generateTokens
};

