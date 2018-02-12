(function () {
    'use strict';
    
    angular.module('gitApp', ['gitApp.Core', 'gitApp.Module'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', config]);

    // Injected Dependency list of core 3rd Party Libraries
    angular.module('gitApp.Core', ['ui.bootstrap', 'ui.router', 'dataGrid', 'pagination', 'ec.stateloader']);

    // Injected Dependency list of all Modules
    angular.module('gitApp.Module', ['gitApp.issues'])
    
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('issues', {
                url: '/',
                controller: 'issuesController',
                controllerAs: 'vm',
                templateUrl: 'issues/issues.html'
            })
            .state('issues-details', {
                url: '/details/:number',
                controller: 'issueDetailsController',
                controllerAs: 'vm',
                templateUrl: 'issues/issue-details/issue-details.html'
            });

        $urlRouterProvider.otherwise('/');
    }

    

})()
