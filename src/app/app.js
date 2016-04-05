"use strict"

import angular from 'angular'
import uirouter from 'angular-ui-router'
import ngAnimate from 'angular-animate'
import uiBootstrap from 'angular-ui-bootstrap'

export default angular.module("trello", [
    uirouter,
    ngAnimate,
    uiBootstrap
]).name

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})