var random_num = require('./random_num');
var dollar = require('./num_to_dollar');

var random_dollar = function(){
  return dollar(random_num(1, 100));
};

var act_balance = function(){
    return 'Account Balance: \n';
};

module.exports.random_dollar = random_dollar;
module.exports.act_balance = act_balance;
