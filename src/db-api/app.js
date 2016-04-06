"use strict"

/*Modules Depends On*/
import trelloShared from './../shared/app.js'

/*Schemes Firebase*/
import BoardScheme from './schemes/BoardScheme.js'
import CardScheme from './schemes/CardScheme.js'
import ListScheme from './schemes/ListScheme.js'

/*Services Firebase*/
import FactoryBoard from './services/FactoryBoard.js'
import FactoryBoards from './services/FactoryBoards.js'
import FactoryCard from './services/FactoryCard.js'
import FactoryCards from './services/FactoryCards.js'
import FactoryDbDriver from './services/FactoryDbDriver.js'
import FactoryList from './services/FactoryList.js'
import FactoryLists from './services/FactoryLists.js'

export default angular
    .module("trello-db-api", [trelloShared])
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
    .name