var Primus = require('primus')
  , server = require('http').Server();

var primus = new Primus(server, {
	pathname: '/sockets', 
	transformer: 'sockjs',
	parser: 'JSON'
});

server.listen(8080, function(){
	console.log('Primus server listening at port %s  and path "/sockets"', '8080' );
});

primus.authorize(function (req, done) {

	console.log('hello wolrd..');
	return done();

});

primus.on('connection', function (spark) {

  	//console.log('A spark connected with id %s', spark.id );
});

primus.on('disconnection', function(spark){
	//console.log('an spark disconnected with id ', spark.id);
});