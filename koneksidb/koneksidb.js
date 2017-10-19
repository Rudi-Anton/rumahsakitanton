let mongoose = require('mongoose');

let database = {
	user : 'rudianton20',
	pass : 'Sayangorangtua20',
	url : 'ds121665.mlab.com:21665',
	name : 'dbrumahsakit'
}
mongoose.connect('mongodb://'+database.user+':'+database.pass+'@'+database.url+'/'+database.name);
