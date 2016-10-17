class StateChecker {
    constructor () {
        this.states = [];
    }

    get StateTypes () {
        return {
            TRANSITION: 'transition',
            ERROR     : 'error',
            ACCEPTING : 'accepting',
            COMMENTARY: 'commentary'
        }
    }


    addStateTransition (state, returnType, value) {
        if (!value) {
            return this.addTransition(state, returnType)
        }
        if (typeof value === 'string') {
            this.addTransition(state, returnType, value);
        }
        else{
            _.map(value, (v) => {
                if (v instanceof Array) {
                    this.addStateTransition(state, returnType, v);
                }
                else if (v instanceof Object) {
                    this.addStateTransition(state, returnType, Object.values(v))
                }
                else if (typeof v === 'string') {
                    this.addTransition(state, returnType, v);
                }
            });
        }

    }


    getStates () {
        return this.states;
    }

    addTransition (state, returnType, value) {
        if (!this.states[state]) {
            this.states[state] = [];
        }
        this.states[state].push({
            value,
            returnType
        });
    }

    evaluate (state, char) {
        let toReturn = undefined;
        _.each(this.states[state],(stateRules=> {
            if (stateRules.value === char) {
                toReturn = stateRules.returnType;
                return false;
            }
            if(stateRules.value === undefined){
                toReturn = stateRules.returnType;
                return false;
            }
        }));
        return toReturn;
    }

    orderStates () {
        this.states = _.map(this.states, (state)=> {
            return  _.orderBy(state, ['value'], ['asc']);
        });
    }
}
let stateChecker = new StateChecker();

exports = module.exports = stateChecker;