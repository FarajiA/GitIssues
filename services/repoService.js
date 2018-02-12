(function (repo) {
    const config = require('../config');
    
    const request = require('request');

    repo.GetRepoInfo = function (owner, repo, next) {
        var repoModel = require('../models/Repo');
        const options = {
            headers: config.headers,
            url: config.urls.github + 'repos/' + owner + '/' + repo,
            method: 'GET'
        };

        request(options, function (err, res, body) {
            var parsed = JSON.parse(body);
            if (err || !parsed)
                next(err, null);
            else {
                let name = parsed.name;
                let count = parsed.open_issues_count;
                let org = parsed.organization.login
                next(null, new repoModel.createRepo(name, org, count));
            }
            
        });
    };

})(module.exports);