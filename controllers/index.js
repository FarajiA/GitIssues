(function (controllers) {

    var issuesController = require("./issuesController");
    var repoController = require("./repoController");

    controllers.init = function (app) {
        issuesController.init(app);
        repoController.init(app);
    };

})(module.exports);