"use strict"

import ServiceHelper from './services/ServiceHelper.js'

export default angular
    .module("trello-common", [])
    .service('ServiceHelper', ServiceHelper)
    .name