(function (Repo) {

    Repo.createRepo = function (name, org, openIssues) {
        this.name = name;
        this.org = org;
        this.openissues = openIssues;
    };

})(module.exports)