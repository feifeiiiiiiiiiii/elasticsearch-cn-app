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

server.get('/users/:nickname/:type', function (req, res, next) {
  var mp = {
    "questions": 101,
    "answers": 201,
    "articles": 501,
  };
  var name = req.params.nickname;
  var type = req.params.type;
  if(!mp[type]) {
    return next("Type not found");
  }
  // 获取PeopleUid
  var base = 'http://proxy.elasticsearch.thnuclub.com/people/'+name;
  request(base, function(err, response, body) {
  	if(err) {
  		return next(err);
  	}
    var s = body.indexOf('PEOPLE_USER_ID');
    var str = body.substr(s+'PEOPLE_USER_ID'.length).replace(/\s+/g,'');
    s = str.indexOf('=');
    var t = str.indexOf(';')
    var peopleId = str.substr(s+2, t-3);
    // 获取不同type的信息
    var baseQ = 'http://proxy.elasticsearch.thnuclub.com/people/ajax/user_actions/uid-'+peopleId+'__actions-'+mp[type]+'__page-0';
    request(baseQ, function(err, resp, body2) {
      if(err) {
  		  return next(err);
  	  }
      try {
        data = util.parseUserDetail(body2);
        res.send(200, data);
        return next();
      } catch(e) {
        console.log(e)
        return next("parse error");
      }
    })
  })
})



server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
