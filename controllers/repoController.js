(function (repoController) {

    var services = require("../services");
    repoController.init = function (app) {
        app.get("/api/repo/:owner/:repo", function (req, res) {
            var owner = req.params.owner;
            var repo = req.params.repo;
            services.RepoInfo(owner, repo, function (err, repoModel) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(repoModel);
                }
            })
        });
    };

})(module.exports);