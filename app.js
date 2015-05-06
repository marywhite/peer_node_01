var express = require("express");
var app = express();
var random_dollar = require('./random_dollar')

app.set('port', (process.env.PORT) || 5000);

app.get('/', function(request, response){
    response.send(random_dollar.act_balance() + random_dollar.random_dollar());
});

app.listen(app.get('port'), function(){
    console.log("listening on port: ", app.get('port'));
});
