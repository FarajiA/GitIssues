
(function () {
    'use strict';

    angular.module('gitApp.issues', ['gitApp.repo.services', 'gitApp.issues.services'])
        .controller('issuesController', issuesController);

    issuesController.$inject = ['$scope', 'Issues','Repo'];

    function issuesController($scope, Issues, Repo) {
        var vm = this;
        vm.Repo = {};
        vm.maxPagesToDisplay = 7;
        vm.pagerOptions = [10, 25, 50];
        vm.gridOptions = {
            data: [],
            urlSync: true
        };
        vm.showLoader = true;

        $scope.$on('$viewContentLoaded', function () {
            Repo.repoInfo("ionic-team", "ionic").then(function (response) {               
                vm.Repo = response;
                vm.Repo.index = 1;
                vm.Repo.count = 25;
                Issues.getIssues(vm.Repo.org, vm.Repo.name, vm.Repo.index, vm.Repo.count).then(function (issuesCollection) {
                    vm.gridOptions.data = issuesCollection;
                    vm.Repo.numberOfPages = Math.ceil(vm.Repo.openissues / vm.Repo.count);
                    vm.showLoader = false;
                });
            }, function (err) {
                vm.showLoader = false;
            });
        });                        

        vm.reloadGrid = function () {
            vm.showLoader = true;
            Issues.getIssues(vm.Repo.org, vm.Repo.name, vm.Repo.index, vm.Repo.count).then(function (issuesCollection) {
                vm.gridOptions.data = issuesCollection;
                vm.Repo.numberOfPages = Math.ceil(vm.Repo.openissues / vm.Repo.count);
                vm.showLoader = false;
            }, function (err) {
                vm.showLoader = false;
            });
        };
        
    }


})();