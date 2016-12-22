import tokenTypes from '../lexical/TokenTypes';
import keywords from '../lexical/c/keywords';
import alphabet from '../lexical/alphabet';
import variables from '../lexical/c/variables';

class SyntaxAnalysis {

	constructor (tokens) {
		this.tokens = tokens;
		this.currentIndex = 0;
		this.variables = [];
	}

	_addVariable({type, token, value = undefined}){
		this.variables.push({
			type,
			name: token.lexeme,
			token,
			value
		})
	}

	_peek () {
		return this.tokens[this.currentIndex];
	}

	_next () {
		this.activeToken = this._peek();
		this.currentIndex++;
		return this.activeToken;
	}

	__eof () {
		return this.currentIndex >= this.tokens.length;
	}

	_expectedCharException (missingLexeme, receivedLexeme = this.activeToken) {
		throw new Exception(`Expected ${missingLexeme}, received ${receivedLexeme.lexeme} at ${receivedLexeme.lineNum}:${receivedLexeme.charNum}`);
	}

	_checkKeyword (token, keyword, throwException = true) {
		if (token.type === tokenTypes.KEYWORD && this._checkLexeme(token, keyword, throwException)) return true;
		if (throwException) return this._expectedCharException(keyword, token);
		return false;
	}

	_isVariable (token, throwException = true) {
		if (token.type === tokenTypes.VARIABLE) return true;
		if (throwException) return this._expectedCharException(keyword, token);
		return false;
	}

	_checkLexeme (token, keyword, throwException = true) {
		if (Array.isArray(keyword)) {
			if (keyword.contains(token.lexeme)) return true;
		}
		if (token.lexeme == keyword) return true;
		if (throwException) return this._expectedCharException(keyword, token);
		return false;
	}


	mainMethod () {
		if (this._checkKeyword(this._next(), 'int')) {
			if (this._checkKeyword(this._next(), 'main')) {
				if (this._checkLexeme(this._next(), alphabet.blocks.openParenthesis)) {
					if (this._checkLexeme(this._next(), alphabet.blocks.closeParenthesis)) {
						return this.functionBlock();
					}
				}
			}
		}
	}

	variablesOrStatements () {

	}

	variableDeclaration (throwException = false) {
		if (this._checkKeyword(this._peek(), Object.values(variables), throwException)) {
			let type = this._next();
			this._isVariable(this._peek(), true);
			let variable = this._next();
			if (this._checkLexeme(this._peek(),alphabet.semicolon,false)) {
				this._addVariable({type, value: variable});
				return true;
			}
			else if (this._checkLexeme(this._peek(),alphabet.coma,false)) {
				let variables = this.multipleVariableDeclaration(type);
				if(!variables){
					return this._expectedCharException('variable',alphabet.semicolon);
				}
				else {
					_.each(variables,variable => {
						this._addVariable({type, value: variable});
					});
					return true;
				}
			}
			else return false;
		}
		else return false;
	}

	multipleVariableDeclaration (type, variables = []) {
		if(this._isVariable(this._peek(), false)) {
			variables.push({
				type,
				variable: this._next()
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
		if (this._checkLexeme(this._next(), alphabet.blocks.openBracket)) {

		}
	}

}