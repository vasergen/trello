"use strict"

angular.module("trello", [
    "lodash-fp",
    "firebase",
    "ui.router",
    "ngAnimate"
])

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})