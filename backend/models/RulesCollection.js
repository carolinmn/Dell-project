var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/dataBase');

var RulesSchema = mongoose.Schema({
    ruleName : String,
    keywords : ["",""]
 });

 var Rules = mongoose.model("Rule", RulesSchema);

 module.exports = Rules;
