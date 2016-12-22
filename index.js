global._ = require('lodash');
global.fs = require('fs');
global.path = require('path');

let fileName = process.argv[2];
let parser = require("node-c-parser");
let lexer = require("node-c-lexer");

const lexical = require('./lexical');
import Syntax from './sintax';


const stateLexer = require('./lexical/state-lexer');

let tokensGenerator = lexical.generateTokens(path.normalize(fileName));
tokensGenerator.then((tokens)=>{
    // console.log(tokens);

	const syntaxAnalyzer = new Syntax(tokens);
	console.log(syntaxAnalyzer.analyze());


}).catch((error)=>{
    console.log(error);
});
