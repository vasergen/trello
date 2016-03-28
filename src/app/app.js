"use strict"

angular.module("trello", [
    "lodashfp",
    "firebase",
    "ui.router"
])

window.addEventListener('load', () => {
    angular.bootstrap(document, ["trello"])
})