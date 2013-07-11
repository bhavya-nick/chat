var node 			= {};
node.url 			= require( "url" );
node.queryString 	= require( "querystring" );
node.express 		= require("express");
node.app 			= node.express();

node.port 			= 3000;
 
node.app.get("/", function(req, res){
	
	if(typeof(req.query.app) == 'undefined'){
		res.send("Invalid App...!!!");
	}
	
	var app_name = req.query.app;
    var app = require('./apps/'+app_name+'/'+app_name+'.js');
    
    res.send(app.execute(req));
});
 
node.app.listen(node.port);
console.log("Listening on port " + node.port);