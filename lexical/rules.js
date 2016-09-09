const stateLexer = new require('./state-lexer')();
const alphabet = require('./alphabet');
const states = require('./states');
/*
 It may return an token obj, another state, or error obj
 */

stateLexer.addStateTransition(0, states.transition[1], alphabet.LETTERS);
stateLexer.addStateTransition(0, states.transition[2], alphabet.NUMBERS);
stateLexer.addStateTransition(0, states.transition[5], alphabet.math.add);
stateLexer.addStateTransition(0, states.transition[6], alphabet.math.minus);
stateLexer.addStateTransition(0, states.transition[7], alphabet.math.asterisk);
stateLexer.addStateTransition(0, states.transition[8], alphabet.math.div);
stateLexer.addStateTransition(0, states.accepting.sin_oc[157], alphabet.math.percent);
stateLexer.addStateTransition(0, states.transition[9], alphabet.logic.ampersand);
stateLexer.addStateTransition(0, states.transition[13], alphabet.logic.pipe);
stateLexer.addStateTransition(0, states.transition[14], alphabet.logic.exclamation);
stateLexer.addStateTransition(0, states.transition[15], alphabet.logic.moreThan);
stateLexer.addStateTransition(0, states.transition[16], alphabet.logic.lessThan);
stateLexer.addStateTransition(0, states.transition[17], alphabet.logic.equal);
stateLexer.addStateTransition(0, states.accepting.sin_oc[164], alphabet.blocks.openParenthesis);
stateLexer.addStateTransition(0, states.accepting.sin_oc[165], alphabet.blocks.closeParenthesis);
stateLexer.addStateTransition(0, states.accepting.sin_oc[166], alphabet.blocks.openSquare);
stateLexer.addStateTransition(0, states.accepting.sin_oc[167], alphabet.blocks.closeSquare);
stateLexer.addStateTransition(0, states.accepting.sin_oc[168], alphabet.blocks.openBracket);
stateLexer.addStateTransition(0, states.accepting.sin_oc[169], alphabet.blocks.closeBracket);
stateLexer.addStateTransition(0, states.accepting.sin_oc[170], alphabet.semicolon);
stateLexer.addStateTransition(0, states.accepting.sin_oc[171], alphabet.coma);
stateLexer.addStateTransition(0, states.transition[18], alphabet.doubleQuote);
stateLexer.addStateTransition(0, states.transition[19], alphabet.singleQuote);


stateLexer.addRule(0, (char)=> {
    for (let space in alphabet.spaces) {
        if (space === char) return;
    }
    if (alphabet.LETTERS.contains(char)) {
        return states.transition[1];
    }
    else if (alphabet.NUMBERS.contains(char)) {
        return states.transition[2]
    }
    else {
        switch (char) {
            case alphabet.math.add:
                return states.transition[5];
                break;
            case alphabet.math.minus:
                return states.transition[6];
                break;
            case alphabet.math.asterisk:
                return states.transition[7];
                break;
            case alphabet.math.div:
                return states.transition[8];
                break;
            case alphabet.math.percent:
                return states.accepting.sin_oc[157];
                break;
            case alphabet.logic.ampersand:
                return states.transition[9];
                break;
            case alphabet.logic.pipe:
                return states.transition[13];
                break;
            case alphabet.logic.exclamation:
                return states.transition[14];
                break;
            case alphabet.logic.moreThan:
                return states.transition[15];
                break;
            case alphabet.logic.lessThan:
                return states.transition[16];
                break;
            case alphabet.logic.equal:
                return states.transition[17];
                break;
            case alphabet.blocks.openParenthesis:
                return states.accepting.sin_oc[164];
                break;
            case alphabet.blocks.closeParenthesis:
                return states.accepting.sin_oc[165];
                break;
            case alphabet.blocks.openSquare:
                return states.accepting.sin_oc[166];
                break;
            case alphabet.blocks.closeSquare:
                return states.accepting.sin_oc[167];
                break;
            case alphabet.blocks.openBracket:
                return states.accepting.sin_oc[168];
                break;
            case alphabet.blocks.closeBracket:
                return states.accepting.sin_oc[169];
                break;
            case alphabet.semicolon:
                return states.accepting.sin_oc[170];
                break;
            case alphabet.coma:
                return states.accepting.sin_oc[171];
                break;
            case alphabet.doubleQuote:
                return states.transition[18];
                break;
            case alphabet.singleQuote:
                return states.transition[19];
                break;
            default:
                return states.transition[0];
                break;
        }
    }
});


