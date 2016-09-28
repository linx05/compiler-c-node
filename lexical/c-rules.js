const stateLexer = require('./state-lexer');
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
stateLexer.addStateTransition(0, states.accepting[157], alphabet.math.percent);
stateLexer.addStateTransition(0, states.transition[9], alphabet.logic.ampersand);
stateLexer.addStateTransition(0, states.transition[13], alphabet.logic.pipe);
stateLexer.addStateTransition(0, states.transition[14], alphabet.logic.exclamation);
stateLexer.addStateTransition(0, states.transition[15], alphabet.logic.moreThan);
stateLexer.addStateTransition(0, states.transition[16], alphabet.logic.lessThan);
stateLexer.addStateTransition(0, states.transition[17], alphabet.logic.equal);
stateLexer.addStateTransition(0, states.accepting[164], alphabet.blocks.openParenthesis);
stateLexer.addStateTransition(0, states.accepting[165], alphabet.blocks.closeParenthesis);
stateLexer.addStateTransition(0, states.accepting[166], alphabet.blocks.openSquare);
stateLexer.addStateTransition(0, states.accepting[167], alphabet.blocks.closeSquare);
stateLexer.addStateTransition(0, states.accepting[168], alphabet.blocks.openBracket);
stateLexer.addStateTransition(0, states.accepting[169], alphabet.blocks.closeBracket);
stateLexer.addStateTransition(0, states.accepting[170], alphabet.semicolon);
stateLexer.addStateTransition(0, states.accepting[171], alphabet.coma);
stateLexer.addStateTransition(0, states.transition[18], alphabet.doubleQuote);
stateLexer.addStateTransition(0, states.transition[19], alphabet.singleQuote);
stateLexer.addStateTransition(0, states.error[-500], alphabet.dot);
stateLexer.addStateTransition(0, states.space, alphabet.spaces);

stateLexer.addStateTransition(1, states.transition[1], alphabet.LETTERS);
stateLexer.addStateTransition(1, states.transition[1], alphabet.NUMBERS);
stateLexer.addStateTransition(1, states.accepting[101]);

stateLexer.addStateTransition(2, states.transition[2], alphabet.NUMBERS);
stateLexer.addStateTransition(2, states.transition[3], alphabet.dot);
stateLexer.addStateTransition(2, states.error[-500], alphabet.LETTERS);
stateLexer.addStateTransition(2, states.accepting[102]);

stateLexer.addStateTransition(3, states.transition[4], alphabet.NUMBERS);
stateLexer.addStateTransition(3, states.error[-500]);

stateLexer.addStateTransition(4, states.transition[4], alphabet.NUMBERS);
stateLexer.addStateTransition(4, states.error[-500], alphabet.LETTERS);
stateLexer.addStateTransition(4, states.accepting[103]);

stateLexer.addStateTransition(5, states.accepting[151], alphabet.math.add);
stateLexer.addStateTransition(5, states.accepting[152], alphabet.math.equal);
stateLexer.addStateTransition(5, states.accepting[104]);

stateLexer.addStateTransition(6, states.accepting[153], alphabet.math.minus);
stateLexer.addStateTransition(6, states.accepting[154], alphabet.math.equal);
stateLexer.addStateTransition(6, states.accepting[105]);

stateLexer.addStateTransition(7, states.accepting[155], alphabet.math.equal);
stateLexer.addStateTransition(7, states.accepting[106]);

//TODO: DEAL WITH EOL character
//stateLexer.addStateTransition(8, states.transition[10], alphabet.math.div);
stateLexer.addStateTransition(8, states.transition[11], alphabet.math.asterisk);
stateLexer.addStateTransition(8, states.accepting[156], alphabet.math.equal);
stateLexer.addStateTransition(8, states.accepting[107]);

stateLexer.addStateTransition(9, states.accepting[158], alphabet.math.equal);

stateLexer.addStateTransition(10, states.other.commentary, alphabet.spaces.eol);
stateLexer.addStateTransition(10, states.transition[10]);

stateLexer.addStateTransition(11, states.transition[12], alphabet.math.asterisk);
stateLexer.addStateTransition(11, states.transition[11]);

stateLexer.addStateTransition(12, states.other.commentary, alphabet.math.div);
stateLexer.addStateTransition(12, states.transition[12]);

stateLexer.addStateTransition(13, states.accepting[159], alphabet.logic.pipe);

stateLexer.addStateTransition(14, states.accepting[160], alphabet.math.equal);
stateLexer.addStateTransition(14, states.accepting[108]);

stateLexer.addStateTransition(15, states.accepting[161], alphabet.math.equal);
stateLexer.addStateTransition(15, states.accepting[109]);

stateLexer.addStateTransition(16, states.accepting[162], alphabet.math.equal);
stateLexer.addStateTransition(16, states.accepting[110]);

stateLexer.addStateTransition(17, states.accepting[163], alphabet.math.equal);
stateLexer.addStateTransition(17, states.accepting[111]);

stateLexer.addStateTransition(18, states.accepting[172], alphabet.doubleQuote);
stateLexer.addStateTransition(18, states.error[-500], alphabet.spaces.eol);
stateLexer.addStateTransition(18, states.transition[18]);

stateLexer.addStateTransition(19, states.error[-500], alphabet.doubleQuote);
stateLexer.addStateTransition(19, states.transition[20]);

stateLexer.addStateTransition(20, states.accepting[173], alphabet.singleQuote);
stateLexer.addStateTransition(20, states.transition[20]);

stateLexer.orderStates();