class StateChecker {
    constructor () {
        this.states = [];
    }

    addStateTransition (state, returnType, ...value) {
        value.map(v=> {
            this.addTransition(state, v, returnType)
        });
    }

    addTransition (state, value, returnType) {
        this.states[state].push({
            value,
            returnType
        });
    }

    evaluate(state, char){
        this.states[state].map(obj=>{
           if(obj.value === char) return obj.returnType;
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