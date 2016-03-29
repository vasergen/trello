(function() {
    "use strict"

    angular.module("trello")
        .config(($stateProvider, $urlRouterProvider) => {

            $urlRouterProvider.otherwise('/')

            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: 'src/app/states/state.boards.html'
                })
                .state('test', {
                    url: '/test',
                    templateUrl: 'src/app/states/state.test.html'
                })
        })
})()