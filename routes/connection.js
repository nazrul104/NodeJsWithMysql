var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database    : 'db_store'
});

connection.connect(function(err)
 {
    if (err) 
    {
	    console.error('error connecting: ' + err.stack);
	    return;
	}
});

module.exports = connection;