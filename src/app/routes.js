import boardsView from './views/boards.html'
import boardView from './views/board.html'
import testView from './views/test.html'

export default function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('boards', {
            url: '/',
            template: boardsView
        })
        .state('board', {
            url: '/board:boardKey/:slug',
            template: boardView
        })
        .state('test', {
            url: '/test',
            template: testView
        })
}
