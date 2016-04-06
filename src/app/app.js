"use strict"

/*Modules depends on*/
import trelloDbApi from './../db-api/app.js'
import trelloCommon from './../common/app.js'

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
import trNewComment from './components/trNewComment'
import trNewList from './components/trNewList'
import trComment from './components/trComment'
import trComments from './components/trComments'


export default angular
    .module("trello", ['ui.router', 'ngAnimate', 'ui.bootstrap', trelloDbApi, trelloCommon])
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
    .component('trNewComment', trNewComment)
    .component('trNewList', trNewList)
    .component('trComment', trComment)
    .component('trComments', trComments)
    .name

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})