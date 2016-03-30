(function() {
    "use strict"

    angular.module("trello")
        .config(($stateProvider, $urlRouterProvider) => {

            $urlRouterProvider.otherwise('/')

            $stateProvider
                .state('boards', {
                    url: '/',
                    templateUrl: 'src/app/states/state.boards.html'
                })
                .state('board', {
                    url: '/board:boardKey/:slug',
                    templateUrl: 'src/app/states/state.board.html'
                })
                .state('test', {
                    url: '/test',
                    templateUrl: 'src/app/states/state.test.html'
                })
        })
})()