"use strict"

angular.module("firebase", [])
    .factory('Firebase', function() {
        if(!window.Firebase)
            throw new Error("Error! Firebase not found")

        return window.Firebase
    })