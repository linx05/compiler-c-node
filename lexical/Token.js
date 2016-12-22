import Model from 'objectmodel';
import StateModel from './State';

export default new Model({
	lexeme  : String,
	state   : StateModel,
	lineNum : [Number],
	charNum : [Number]
});