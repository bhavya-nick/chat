exports.execute = function(req){
	var controller_name = req.param('controller', 'dashboard');
	var controller = require('./controller/'+controller_name+'.js');
	return controller[controller_name].execute();
};


