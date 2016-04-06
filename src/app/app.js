"use strict"

/*Modules depends on*/
import trelloDbApi from './../db-api/app.js'
import trelloShared from './../common/app.js'

/*Css*/
import './_sharedCss/app.styl'

/*Routes*/
import routes from './routes.js'

/*Services*/
import ServiceConfig from './services/ServiceConfig.js'
import ServiceEvents from './services/ServiceEvents.js'

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
    .module("trello", ['ui.router', 'ngAnimate', 'ui.bootstrap', trelloDbApi, trelloShared])
    .config(routes)
    /*Services*/
    .service('ServiceConfig', ServiceConfig)
    .service('ServiceEvents', ServiceEvents)
    /*Directives*/
    .directive('eventFocus', eventFocus)
    /*Components*/
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