"use strict"

import angular from 'angular'
import uirouter from 'angular-ui-router'
import ngAnimate from 'angular-animate'
import uiBootstrap from 'angular-ui-bootstrap'

    /*Routes*/
import routes from './routes.js'
    /*Directives*/
import eventFocus from './directives/eventFocus'
    /*Components*/
import trTest from './components/trTest'
import trBoard from './components/trBoard'
import trBoardHeader from './components/trBoardHeader'
import trBoards from './components/trBoards'
import trCard from './components/trCard'
import trFooter from './components/trFooter'
import trHeader from './components/trHeader'
import trIcon from './components/trIcon'
import trList from './components/trList'
import trLists from './components/trLists'
import trNewBoard from './components/trNewBoard'
import trNewCard from './components/trNewCard'
import trNewList from './components/trNewList'

export default angular
    .module("trello", [uirouter, ngAnimate, uiBootstrap])
    .config(routes)
    .directive('eventFocus', eventFocus)
    .component('trTest', trTest)
    .component('trBoard', trBoard)
    .component('trBoardHeader', trBoardHeader)
    .component('trBoards', trBoards)
    .component('trCard', trCard)
    .component('trFooter', trFooter)
    .component('trHeader', trHeader)
    .component('trIcon', trIcon)
    .component('trList', trList)
    .component('trLists', trLists)
    .component('trNewBoard', trNewBoard)
    .component('trNewCard', trNewCard)
    .component('trNewList', trNewList)
    .name

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})