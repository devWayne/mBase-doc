var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '_devwayne.github.io'), function(err) {
	if(err){
	console.log(err);
	}else{
	console.log('pubish success');
	}
});
