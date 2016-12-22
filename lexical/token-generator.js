const keywords = require('./c/keywords');
const TokenTypes = require('./TokenTypes');
exports = module.exports = ({
    lexeme,
    state,
    charNum,
    lineNum
}) => {
    let token = {
        lexeme,
        state,
        charNum,
        lineNum
    };
    if (state === 101) {
        token.type = TokenTypes.VARIABLE;
        if (keywords.includes(lexeme)) {
            token.type = TokenTypes.KEYWORD
        }
    }
    return token;
};