var numeral = require('numeral');

var dollar = function(num){
    return numeral(num).format('0,0.00');
};

module.exports = dollar;
