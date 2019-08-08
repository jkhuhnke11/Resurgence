'use strict'
var needle = require('needle'), 
	$      = require('cheerio'); 

module.exports = function(callback){

	needle.get('https://www.resurgencebrewing.com/beer_type/on-tap-now/', function(err, res){

		if(err) return callback(err); 

		if(res.statusCode !== 200) return callback(new Error('Site Unavailable')); 

		var results = []; 
		$.load(res.body)('h3').each(function(i, t){
			results.push($(t).text().toLowerCase().trim()); 
		}); 

		if(results.length === 0) return callback(new Error('Unable to Find Beer Listing on Site')); 

		return callback(null, results); 
	}); 
};  