"use strict"

angular.module("trello", [
    "lodash-fp",
    "firebase",
    "ui.router",
    "ngAnimate",
    "ui.bootstrap"
])

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})