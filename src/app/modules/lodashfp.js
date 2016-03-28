"use strict"

angular.module("lodash-fp", [])
    .factory('_', function() {
        if(!window._)
            throw new Error("Error! Lodash is not found")

        return window._
    })