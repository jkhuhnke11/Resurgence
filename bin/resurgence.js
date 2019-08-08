'use strict'

require('..')(function(err, results){
	if(err) console.log('Error:', err); 
	else console.log(results.join(', ')); 
}); 