"use strict"

angular.module("trello")
    .service('ServiceConfig', function() {
        let getFirebaseBaseUrl = () => "https://vstrello.firebaseio.com/"

        return {
            getFirebaseBaseUrl
        }
    })