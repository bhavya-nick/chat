var node 			= {};
node.url 			= require( "url" );
node.queryString 	= require( "querystring" );
node.express 		= require("express");
node.app 			= node.express();
node.port 			= 3700;
 
node.app.get("/", function(req, res){
	// parses the request url
    var theUrl = node.url.parse( req.url );

    // gets the query part of the URL and parses it creating an object
    var queryObj = node.queryString.parse( theUrl.query );

    // queryObj will contain the data of the query as an object
    // and jsonData will be a property of it
    // so, using JSON.parse will parse the jsonData to create an object
   // var obj = JSON.parse( queryObj.jsonData );

    // as the object is created, the live below will print "bar"
    if(typeof(queryObj.app) == 'undefined'){
    	res.send('Invalid App Requested...!!!');
    }
    
    res.send('It works');    
});
 
node.app.listen(node.port);
console.log("Listening on port " + node.port);