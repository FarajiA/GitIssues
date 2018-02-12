(function (services) {
    
    var issues = require('./issuesService');
    var repos = require('./repoService');

    services.IssuesByOrgRepo = function(owner, repo, index, count, cb) {
        issues.IssuesByOrgRepo(owner, repo, index, count, function (err, response) {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.IssueByRepo = function (owner, repo, number, cb) {
        issues.IssueByRepo(owner, repo, number, function (err, response) {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        }); 
    };
    
    services.RepoInfo = function (org, repo, cb) {
        repos.GetRepoInfo(org, repo, function (err, response) {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

})(module.exports);
