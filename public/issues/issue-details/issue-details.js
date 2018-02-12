(function () {
    'use strict';

    angular.module('gitApp.issues').controller('issueDetailsController', issueDetailsController);

    issueDetailsController.$inject = ['$stateParams', 'Issues', 'Repo'];

    function issueDetailsController($stateParams, Issues, Repo) {
        var vm = this;

        vm.issueNumber = $stateParams.number;
        vm.showLoader = true;
        vm.Repo = Repo.data;
        Issues.getIssue(vm.Repo.org, vm.Repo.name, vm.issueNumber).then(function (issue) {
            vm.issueDetails = issue;
            vm.showLoader = false;
        }, function (err) {
            vm.showLoader = false;
        });

        vm.goBack = function () {
            window.history.back();
        };
    }


})();