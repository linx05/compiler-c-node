const _ = require('lodash');
let obj = {
    transition: [
        {type:'transition',value:1},
        {type:'transition',value:2},
        {type:'transition',value:3},
        {type:'transition',value:4},
        {type:'transition',value:5},
        {type:'transition',value:6},
        {type:'transition',value:7},
        {type:'transition',value:8},
        {type:'transition',value:9},
        {type:'transition',value:10},
        {type:'transition',value:11},
        {type:'transition',value:12},
        {type:'transition',value:13},
        {type:'transition',value:14},
        {type:'transition',value:15},
        {type:'transition',value:16},
        {type:'transition',value:17},
        {type:'transition',value:18},
        {type:'transition',value:19},
        {type:'transition',value:20}
    ],
    other: {
        commentary: {type:'commentary'},
    },
    accepting : {
        oc    : {
            101: {type:'accepting',value:101,otherChar:false},
            102: {type:'accepting',value:102,otherChar:false},
            103: {type:'accepting',value:103,otherChar:false},
            104: {type:'accepting',value:104,otherChar:false},
            105: {type:'accepting',value:105,otherChar:false},
            106: {type:'accepting',value:106,otherChar:false},
            107: {type:'accepting',value:107,otherChar:false},
            108: {type:'accepting',value:108,otherChar:false},
            109: {type:'accepting',value:109,otherChar:false},
            110: {type:'accepting',value:110,otherChar:false},
            111: {type:'accepting',value:111,otherChar:false},
            112: {type:'accepting',value:112,otherChar:false},
            113: {type:'accepting',value:113,otherChar:false},
            114: {type:'accepting',value:114,otherChar:false},
            115: {type:'accepting',value:115,otherChar:false},
        },
        sin_oc: {
            151:{type:'accepting',value:151,otherChar:true},
            152:{type:'accepting',value:152,otherChar:true},
            153:{type:'accepting',value:153,otherChar:true},
            154:{type:'accepting',value:154,otherChar:true},
            155:{type:'accepting',value:155,otherChar:true},
            156:{type:'accepting',value:156,otherChar:true},
            157:{type:'accepting',value:157,otherChar:true},
            158:{type:'accepting',value:158,otherChar:true},
            159:{type:'accepting',value:159,otherChar:true},
            160:{type:'accepting',value:160,otherChar:true},
            161:{type:'accepting',value:161,otherChar:true},
            162:{type:'accepting',value:162,otherChar:true},
            163:{type:'accepting',value:163,otherChar:true},
            164:{type:'accepting',value:164,otherChar:true},
            165:{type:'accepting',value:165,otherChar:true},
            166:{type:'accepting',value:166,otherChar:true},
            167:{type:'accepting',value:167,otherChar:true},
            168:{type:'accepting',value:168,otherChar:true},
            169:{type:'accepting',value:169,otherChar:true},
            170:{type:'accepting',value:170,otherChar:true},
            171:{type:'accepting',value:171,otherChar:true},
            172:{type:'accepting',value:172,otherChar:true},
            173:{type:'accepting',value:173,otherChar:true},
            174:{type:'accepting',value:174,otherChar:true},
            175:{type:'accepting',value:175,otherChar:true},

        }
    },
    error:[
        _.range(-600,-500)
    ]
};

_.map(_.range(-600,-500),(value)=>{
   obj.error[value] = {
       type:'error',
       value
   }
});

_.map(_.range(1,50),(value)=>{
    obj.transition[value] = {
        type:'transition',
        value
    }
});

exports = module.exports = obj;