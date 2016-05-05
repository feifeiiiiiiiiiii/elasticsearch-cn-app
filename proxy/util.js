var cheerio = require('cheerio');
var request = require('request');

parseUser = function(body) {
	var $ = cheerio.load(body);
	var avtars = [];
	$('.aw-user-img>img').each(function(i) {
		avtars.push($(this)[0].attribs.src);
	});
	var nicknames = [];
	$('.aw-item>p.title').each(function(i) {
		nicknames.push($(this).text().trim());
	})
	var descs = [];
	$('.aw-item>p.signature').each(function() {
		descs.push($(this).text().trim());
	});
	var meta = {
		prestige: [],
		score: [],
		agree: [],
		thank: [],
	}
	$('.aw-item>div.meta').each(function(i, e) {
		var tmp = ['prestige', 'score', 'agree', 'thank'];
		var i = 0;
		$(e).find('span>b').each(function() {
			meta[tmp[i]].push($(this).text());
			i++;
		})
	})
	var tags = [];
	$('.aw-item .topic-bar').each(function(i, e) {
		var tmp = "";
		$(e).find(".topic-tag").each(function() {
			if(tmp.length) tmp += " ";
			tmp += $(this).text().replace(/\s+/g, '');
		})
		tags.push(tmp);
	})
	var data = [];
	for(var i = 0; i < avtars.length; ++i) {
		data.push({
			img: avtars[i],
			nickname: nicknames[i],
			desc: descs[i],
			topic: tags[i],
			prestige: meta['prestige'][i] || 0,
			score: meta['score'][i] || 0,
			agree: meta['agree'][i] || 0,
			thank: meta['thank'][i] || 0
		})
	}
	return data;
}

parseTopic = function(body) {
		var $ = cheerio.load(body);
		var data = [];

		$('.aw-item').each(function(i, e) {
			var tmp = {};
			tmp['img'] = $(e).find('a.img')[0].attribs.href;
			tmp['id'] = $(e).find('a.img')[0].attribs['data-id'];
			tmp['tag'] = $(e).find('.topic-tag').text().replace(/\s+/g, '');
			var dict = ['tag', 'talk', 'desc'];
			var i = 0;
			$(e).find('p').each(function() {
				tmp[dict[i]] = $(this).text().replace(/\s+/g, '');
				i++;
			})
			data.push(tmp);
		})
		return data;
}

parseQuestion = function(body) {
	var $ = cheerio.load(body);
	var data = [];
	$('.aw-item').each(function(i, e) {
		var tmp = {};
		tmp['img'] = $(e).find('.aw-user-name img')[0].attribs.src;
		tmp['question'] = $(e).find('.aw-question-content h4').text().replace(/\s+/g, '');
		var arr = $(e).find('.aw-question-content h4>a')[0].attribs.href.split('/');
		tmp['id'] = arr[arr.length-1];
		tmp['desc'] = $(e).find('.aw-question-content p').text().replace(/\s+/g, '');
		data.push(tmp);
	})
	return data;
}

parseQuestionDetail = function(body) {
  var $ = cheerio.load(body);
  var title = $('.mod-head h1').text().trim();
  var text = $('.markitup-box').text()
  var data = [];
  $('.mod-body.aw-feed-list .aw-item').each(function(i, e) {
    var tmp = {}
		tmp['img'] = $(e).find('.aw-user-img img')[0].attribs.src;
    tmp['nickname'] = $(e).find('.aw-user-name').text().replace(/\s+/g, '');
    tmp['tag'] = $(e).find('.title p>span').text();
    tmp['content'] = $(e).find('.markitup-box').text();
    data.push(tmp)
  });
  return {
    title: title,
    text: text,
    comments: data
  };
}

parseUserDetail = function(body) {
  var $ = cheerio.load(body);
  var data = [];
  $('.aw-item').each(function(i, e) {
    var tmp = {};
		tmp['question'] = $(e).find('.mod-head h4').text().replace(/\s+/g, '');
    console.log('aaaaaaaa')
		var arr = $(e).find('.mod-head h4>a')[0].attribs.href.split('/');
		tmp['id'] = arr[arr.length-1];
		tmp['desc'] = $(e).find('.mod-body p').text().replace(/\s+/g, '');
    data.push(tmp);
  })
  return data;
}



module.exports = {
	parseTopic: parseTopic,
	parseQuestion: parseQuestion,
	parseUser: parseUser,
  parseQuestionDetail: parseQuestionDetail,
  parseUserDetail: parseUserDetail
}
