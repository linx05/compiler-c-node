class StateChecker {
    constructor () {
        this.states = [];
    }

    addStateTransition (state, returnType, ...value) {
        if(!value){

        }
        _.map(value, v => {
            if (typeof v === 'string') {
                this.addTransition(state, returnType, v);
            }
            else if (v instanceof Array) {
                this.addStateTransition(state, returnType, v);
            }
            else if (v instanceof Object) {
                this.addStateTransition(state, returnType, Object.values(v))
            }
        });
    }

    addTransition (state, returnType, value) {
        this.states[state].push({
            value,
            returnType
        });
    }

    evaluate (state, char) {
        this.states[state].map(obj=> {
            if (obj.value === char) return obj.returnType;
        });
    }

    ////////////////////////////
    addRule (state, cb) {
        this.states[state] = cb;
    }

    checkState (state, char) {
        this.states[state]();
    }
}

exports = module.exports = stateChecker;