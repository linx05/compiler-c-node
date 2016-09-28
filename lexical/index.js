let readline = require('readline');

const rules = require('./c-rules');
const states = require('./state-lexer');

function generateToken (lexeme, state, charNum, lineNum) {
    return {
        lexeme,
        state,
        charNum,
        lineNum
    }
}

class Lexical {
    constructor () {
        this.state = 0;
        this.lexeme = '';
        this.tokens = [];
        this.line = 0;
        this.char = 0;
    }

    analyzeState (char, lineNum, charNum) {
        //TODO: RETURN THE STATE AND IF IT RETURNS A TOKEN GENERATE TOKEN
        //PASS TOKEN THROUGH RULE ANALYSIS
        //this.lexeme += char;

        let result = states.evaluate(this.state, char);
        if (!result) {
            return;
        }
        if (result.type === states.StateTypes.ACCEPTING) {
            this.lexeme += char;
            this.state = 0;
            if (result.otherChar) {
                this.lexeme = this.lexeme.slice(0,-1);
            }
            this.tokens.push(generateToken(this.lexeme.trim(),result.value,lineNum,charNum));
            this.lexeme = '';
            if(result.otherChar){
                this.analyzeState(char,lineNum,charNum);
            }
        }
        else if (result.type === states.StateTypes.TRANSITION) {
            this.lexeme += char;
            this.state = result.value;
        }
        else if (result.type === states.StateTypes.ERROR) {
            console.log('ERROR!',result.value);
            this.state = 0;
        }
    }

    generateTokens (file) {

        let rl = readline.createInterface({
            input: fs.createReadStream(file)
        });

        let lineNum = 0;
        let charNum = 0;

        rl.on('line', (line)=> {
            lineNum += 1;
            charNum = 0;
            _.map(line, char => {
                charNum += 1;
                this.analyzeState(char, charNum, lineNum);
            });
        });


        //let rl =  new readline(file,{skipEmptyLines: false});
        //rl.on('line', (line, lineCount, byteCount)=> {
        //    _.map(line, char => {
        //        this.analyzeState(char, this.state);
        //    });
        //})
    }
}

let lexicalAnalysis = new Lexical();

exports = module.exports = lexicalAnalysis;

