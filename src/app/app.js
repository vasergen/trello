"use strict"

/*Css*/
import './_cssShared/app.styl'

    /*Routes*/
import routes from './routes.js'
    /*Schemes Firebase*/
import BoardScheme from './services/firebase/schemes/BoardScheme.js'
import CardScheme from './services/firebase/schemes/CardScheme.js'
import ListScheme from './services/firebase/schemes/ListScheme.js'
    /*Services Firebase*/
import FactoryBoard from './services/firebase/FactoryBoard.js'
import FactoryBoards from './services/firebase/FactoryBoards.js'
import FactoryCard from './services/firebase/FactoryCard.js'
import FactoryCards from './services/firebase/FactoryCards.js'
import FactoryDbDriver from './services/firebase/FactoryDbDriver.js'
import FactoryList from './services/firebase/FactoryList.js'
import FactoryLists from './services/firebase/FactoryLists.js'
/*Services*/
import ServiceConfig from './services/ServiceConfig.js'
import ServiceEvents from './services/ServiceEvents.js'
import ServiceHelper from './services/ServiceHelper.js'
import ServiceTranslit from './services/ServiceTranslit.js'
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
    .module("trello", ['ui.router', 'ngAnimate', 'ui.bootstrap'])
    .config(routes)
    /*Schemes Firebase*/
    .service('BoardScheme', BoardScheme)
    .service('CardScheme', CardScheme)
    .service('ListScheme', ListScheme)
    /*Services Firebase*/
    .factory('FactoryBoard', FactoryBoard)
    .factory('FactoryBoards', FactoryBoards)
    .factory('FactoryCard', FactoryCard)
    .factory('FactoryCards', FactoryCards)
    .factory('FactoryDbDriver', FactoryDbDriver)
    .factory('FactoryList', FactoryList)
    .factory('FactoryLists', FactoryLists)
    /*Services*/
    .service('ServiceConfig', ServiceConfig)
    .service('ServiceEvents', ServiceEvents)
    .service('ServiceHelper', ServiceHelper)
    .service('ServiceTranslit', ServiceTranslit)
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