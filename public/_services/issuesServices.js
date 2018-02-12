(function () {
    'use strict';
    angular.module('gitApp.issues.services', []).factory('Issues', Issues);

    Issues.$inject = ['$q', '$http']

    function Issues($q, $http) {
        var issues = {};
        var issuesData = [];
        var issueData = [];

        issues.getIssues = function (org, repo, index, count) {
            var deffered = $q.defer();
            $http.get("api/issues/" + org + "/" + repo + "/" + index + "/" + count)
                .then(function (d) {
                    deffered.resolve(d.data);
                }, function (err) {
                    console.log("Request failed " + err);
                });
            return deffered.promise;
        }

        issues.getIssue = function (org, repo, number) {
            var deffered = $q.defer();
            $http.get("api/issues/" + org + "/" + repo + "/" + number)
                .then(function (d) {
                    deffered.resolve(d.data);
                }, function (err) {
                    console.log("Request failed " + err);
                });
            return deffered.promise;
        }



        return issues;
        

    }


})();