(function () {
    'use strict';

    angular.module('gitApp.repo.services', [])
        .factory('Repo', Repo)

    Repo.$inject = ['$q', '$http'];
    function Repo($q, $http) {       
        var Repo = {};
        Repo.data = {};
        Repo.repoInfo = function (org, repo) {
            var deffered = $q.defer();
            $http.get("api/repo/" + org + "/" + repo)
                .then(function (d) {
                    Repo.data = d.data;
                    deffered.resolve(d.data);
                }, function (err) {
                    console.log("Request failed " + err);
                });
            return deffered.promise;
        }

        return Repo;
    }

})();