"use strict"

angular.module("lodashfp", [])
    .factory('_', function() {
        if(!window._)
            throw new Error("Error! Lodash is not found")

        return window._
    })