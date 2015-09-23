var connection = require('./connection');
exports.AvailableBusinessCategory = function(req, res){
connection.query('SELECT * from category', function(err, rows, fields)
   {
	  if (!err)
	    res.send(JSON.stringify(rows));
	  else
	    console.log('Error while performing Query.');
	});
//connection.end();
};

exports.CreateNewBusinessCategory = function(req,res)
{

	var post  = {ctg_name:'Mobile',status:1,sort_order:2};
    var query = connection.query('INSERT INTO category SET ?', post, function(err, result) {
    if (err) throw err;
    else
    	res.send(result);
    });

    //connection.end();
};