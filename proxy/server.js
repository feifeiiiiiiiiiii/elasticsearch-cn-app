var restify = require('restify');
var request = require('request');
var util = require('./util');

var server = restify.createServer({
  name: 'escnproxy',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/topics', function (req, res, next) {
  var page = 1;
  if (req.params.page) page = req.params.page;
  var base = 'http://proxy.elasticsearch.thnuclub.com/topic/page-'+page;
  request(base, function(err, response, body) {
  	if(err) {
  		return next(err);
  	}
  	try {
  		data = util.parseTopic(body);
  		res.send(200, data);
  		return next();
  	} catch(e) {
  		return next("parse error");
  	}
  })
});

server.get('/users', function (req, res, next) {
  var page = 1;
  if (req.params.page) page = req.params.page;
  var base = 'http://proxy.elasticsearch.thnuclub.com/people/page-'+page;
  request(base, function(err, response, body) {
  	if(err) {
  		return next(err);
  	}
  	try {
  		data = util.parseUser(body);
  		res.send(200, data);
  		return next();
  	} catch(e) {
  		return next("parse error");
  	}
  })
});

server.get('/questions', function (req, res, next) {
  var page = 1;
  if (req.params.page) page = req.params.page;
  var base = 'http://proxy.elasticsearch.thnuclub.com/sort_type-new__day-0__is_recommend-0__page-'+page;
  request(base, function(err, response, body) {
  	if(err) {
  		return next(err);
  	}
  	try {
  		data = util.parseQuestion(body);
  		res.send(200, data);
  		return next();
  	} catch(e) {
  		return next("parse error");
  	}
  })
});

server.get('/questions/:id', function (req, res, next) {
  var questionId = req.params.id;
  var base = 'http://proxy.elasticsearch.thnuclub.com/question/'+ questionId;
  request(base, function(err, response, body) {
  	if(err) {
  		return next(err);
  	}
  	try {
  		data = util.parseQuestionDetail(body);
  		res.send(200, data);
  		return next();
  	} catch(e) {
      console.log(e)
  		return next("parse error");
  	}

  })
})

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
