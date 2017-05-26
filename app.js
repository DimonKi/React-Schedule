var path = require('path');
var express = require('express');
var fs = require('fs')
var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

var PouchDB = require('pouchdb');
var db = new PouchDB('dbname');
/*var schedule = JSON.parse(fs.readFileSync(__dirname+'/schedule.json'));

for (var i = schedule.length - 1; i >= 0; i--) {
	db.put(schedule[i]);
}
*/

app.post('/api/pouch', function (req, res){
	db.allDocs({}, function (err, data){
		var output = [];
		var z = 0;
		for (var i = data.rows.length - 1; i >= 0; i--) {
			db.get(data.rows[i].id).then(function(document){
				output.push(document)
				z+=1;
			});
		}
		let handle = setInterval(function(){
			if(z == data.rows.length){
				clearInterval(handle);
				res.send(JSON.stringify(output));
			}
		},500);
	});
})

app.listen(80, function() {
  console.log('listening');
});
