(function (issues) {

    const config = require('../config.js');
    const request = require('request');
    var issueModel = require('../models/Issue');
    var issuesModel = require('../models/Issues');

    issues.IssuesByOrgRepo = function (owner, repo, index, count, next) {
        let page = Number(index);
        let take = Number(count);
        let queryStringObject = { page: page, per_page: take };

        const options = {
            headers: config.headers,
            url: config.urls.github + 'repos/' + owner + '/' + repo + '/issues',
            method: 'GET',
            qs: queryStringObject
        };

        request(options, function (err, res, body) {
            var parsed = JSON.parse(body);
            var results = [];
            if (err || !parsed)
                next(err, null);
            else {
                parsed.forEach(function (v, k, m) {
                    let item = v;
                    results.push(new issuesModel.createIssue(item.number, item.title, item.user.login, item.user.avatar_url, item.body.substring(0, 140) + '...'));
                });                
                next(null, results);
            }
        });
    };

    issues.IssueByRepo = function (owner, repo, number, next) {        
        
        const options = {
            headers: config.headers,
            url: config.urls.github + 'repos/' + owner + '/' + repo + '/issues/' + number,
            method: 'GET'
        };

        request(options, function (err, res, body) {
            var parsed = JSON.parse(body);
            if (err || !parsed)
                next(err, null);
            else {
                let item = new issueModel.createIssue(parsed.title, parsed.state, parsed.user.login, parsed.user.avatar_url, parsed.body); 
                next(null, item);
            }
        });
    };



})(module.exports);