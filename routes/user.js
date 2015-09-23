/* GET users listing. */
var connection = require('./connection');
exports.Userlist = function(req, res){

  connection.query('SELECT * from user_profile', function(err, rows, fields) {
  if (!err)
    res.send(JSON.stringify(rows));
  else
    console.log('Error while performing Query.');
});

};
