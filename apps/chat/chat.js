var chat = exports.chat = {};
chat.input 	= '';
chat.task 	= '';
chat.tpl 	= '';
chat.controller_name  = '';

chat.execute = function(req){
	// declare variable
	this.input 			 = req;
	this.controller_name = this.input.param('controller', 'dashboard');;
	this.task  			 = this.input.param('task', 'display');
	this.tpl  			 = this.input.param('task', 'display');
	
	var controller 		= require('./controller/'+this.controller_name+'.js');	
	controller 			= controller[this.controller_name];
	
	// if true then load the get the view and load tmpl
	if(controller[this.task](this)){
		var view = this.get_view();
		return view[this.tpl](this);
	}	
	else{
		// redirect to set redirect url
	}
};

chat.get_view = function(req){
	var view = require('./views/'+this.controller_name+'/view.js');
	return view[this.controller_name];
};
