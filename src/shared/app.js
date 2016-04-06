"use strict"

import ServiceHelper from './services/ServiceHelper.js'
import ServiceTranslit from './services/ServiceTranslit.js'

export default angular
    .module("trello-shared", [])
    .service('ServiceHelper', ServiceHelper)
    .service('ServiceTranslit', ServiceTranslit)
    .name