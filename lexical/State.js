import Model from 'objectmodel';

export  default new Model({
	type     : String,
	value    : [Number, String, undefined],
	otherChar: [String]
})