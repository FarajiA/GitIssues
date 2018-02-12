(function (issuesController) {

   var services = require("../services");
   issuesController.init = function (app) {
       app.get("/api/issues/:owner/:repo/:index/:count", function (req, res) {
           var owner = req.params.owner;
           var repo = req.params.repo;
           var index = req.params.index;
           var count = req.params.count;

           services.IssuesByOrgRepo(owner, repo, index, count, function (err, issues) {
               if (err)
                   res.send(400, err);
               else {
                   res.set("Content-Type", "application/json");
                   res.send(issues);
               }
           });
       });

       app.get("/api/issues/:owner/:repo/:number", function (req, res) {
           var owner = req.params.owner;
           var repo = req.params.repo;
           var number = req.params.number;

           services.IssueByRepo(owner, repo, number, function (err, issue) {
               if (err)
                   res.send(400, err);
               else {
                   res.set("Content-Type", "application/json");
                   res.send(issue);
               }
           });

       });

   };

})(module.exports);