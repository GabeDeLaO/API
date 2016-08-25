/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	loginTest : function(req,res){

		var success = false;
		var token = '';
		if( req.param('email') == 'gabe@ap.com' && req.param('password') == 'password' ){
			success = true;
			token = 'xyz456';
		}

		return res.json({
			success: success,
			token: token
		});
	}

};

