"use strict"

angular.module("trello")
    .config(($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise('/')

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'src/app/routesTemplate/index.html'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'src/app/routesTemplate/test.html'
            })
    })