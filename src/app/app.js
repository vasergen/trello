"use strict"

angular.module("trello", [
    "lodash-fp",
    "firebase",
    "ui.router"
])

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})