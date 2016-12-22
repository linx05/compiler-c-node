import _ from 'lodash';
let obj = {
    other     : {
        commentary: {type: 'commentary'},
    },
    space: {
        type: 'space'
    },
    accepting : {},
    error     : {},
    transition: {}
};

_.map(_.range(-600, -499), (value)=> {
    obj.error[value] = {
        type: 'error',
        value
    }
});

_.map(_.range(1, 50), (value)=> {
    obj.transition[value] = {
        type: 'transition',
        value
    }
});

_.map(_.range(101, 200), (value)=> {
    obj.accepting[value] = {type: 'accepting', value};
    obj.accepting[value].otherChar = value < 150;
    //obj.accepting[value].type = value > 150 ? 'oc' : 'sin_oc';
});

exports = module.exports = obj;