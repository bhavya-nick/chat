var user = exports.user = {};

user.display = function(app){	
	var jade = require('jade');	
	
	var options = {
					users :  {
		    				tj: { age: 23, email: 'tj@vision-media.ca', isA: 'human' },
		    				tobi: { age: 1, email: 'tobi@is-amazing.com', isA: 'ferret' }
		  					},
		  			aname : 'Gaurav'
	};
	
	var return_html = '';
	jade.renderFile(__dirname + '/tmpl/display.jade', options, function (err, html) {
		return_html = html;
	});
	
	return return_html;
};