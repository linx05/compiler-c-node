const tokenTypes = require('../lexical/TokenTypes');
const keywords = require( '../lexical/c/keywords');
const alphabet = require( "../lexical/alphabet");
const variables = require( "../lexical/c/variables");
import {SyntaxException} from '../Exeptions';
export default class SyntaxAnalysis {

	constructor (tokens) {
		this.tokens = tokens;
		this.currentIndex = 0;
		this.variables = [];
	}

	_addVariable({type, token, value = undefined}){
		// console.log(`Type : ${JSON.stringify(type,null,2)}`, `Token: ${JSON.stringify(token,null,2)}`);
		this.variables.push({
			type,
			name: token.lexeme,
			token,
			value
		})
	}

	_peek (add = 0) {
		return this.tokens[this.currentIndex+add];
	}

	_next (add=1) {
		this.activeToken = this._peek();
		this.currentIndex+=add;
		return this.activeToken;
	}

	__eof () {
		return this.currentIndex >= this.tokens.length;
	}

	_expectedCharException (missingLexeme, receivedLexeme = this.activeToken) {
		console.log(this.activeToken);
		throw new SyntaxException(`Expected ${missingLexeme}, received ${receivedLexeme.lexeme} at ${receivedLexeme.lineNum}:${receivedLexeme.charNum}`);
	}

	_checkKeyword (token, keyword, throwException = true) {
		if (token.type === tokenTypes.KEYWORD && this._checkLexeme(token, keyword, throwException)) return true;
		if (throwException) return this._expectedCharException(keyword, token);
		return false;
	}

	_isVariable (token, throwException = true) {
		if (token.type === tokenTypes.VARIABLE) return true;
		if (throwException) return this._expectedCharException('variable name', token);
		return false;
	}

	_checkLexeme (token, keyword, throwException = true) {
		if (Array.isArray(keyword)) {
			if (keyword.includes(token.lexeme)) return true;
		}
		if (token.lexeme == keyword) return true;
		if (throwException) return this._expectedCharException(keyword, token);
		return false;
	}

	analyze() {
		if(this.mainMethod() || this.variableDeclaration()){
			return this.analyze();
		}
		return this.variables;
	}
	
	mainMethod () {
		if (this._checkKeyword(this._peek(), 'int', false)) {
			if (this._checkKeyword(this._peek(1), 'main', false)) {
				if (this._checkLexeme(this._peek(2), alphabet.blocks.openParenthesis)) {
					if (this._checkLexeme(this._peek(3), alphabet.blocks.closeParenthesis)) {
						this._next(4);
						return this.functionBlock();
					}
				}
			}
		}
		return false;
	}

	variablesOrStatements () {

	}

	variableDeclaration (throwException = false) {
		if (this._checkKeyword(this._peek(), Object.values(variables), throwException)) {
			let type = this._next();
			this._isVariable(this._peek(), true);
			let variable = this._next();
			this._addVariable({type, token: variable});
			if (this._checkLexeme(this._peek(),alphabet.semicolon,false)) {
				this._next();
				return true;
			}
			else if (this._checkLexeme(this._peek(),alphabet.coma,false)) {
				this._next();
				let variables = this.multipleVariableDeclaration(type);
				if(!variables){
					return this._expectedCharException('variable',alphabet.semicolon);
				}
				else {
					_.each(variables, variable => {
						this._addVariable(variable);
					});
					this._next();
					return true;
				}
			}
			else return false;
		}
		return false;
	}

	multipleVariableDeclaration (type, variables = []) {
		if(this._isVariable(this._peek(), false)) {
			variables.push({
				type,
				token: this._next()
			})
		}
		if(this._checkLexeme(this._peek(),alphabet.semicolon, false)){
			return variables;
		}
		else if(this._checkLexeme(this._peek(),alphabet.coma, false)) {
			this._next();
			return this.multipleVariableDeclaration(type, variables);
		}
		else {
			if(variables.length > 0) return this._expectedCharException('variable',this._next());
			return false;
		}
	}

	expression(throwException = false) {

	}


	functionBlock () {
		return false;
		if (this._checkLexeme(this._next(), alphabet.blocks.openBracket)) {

		}
	}

}