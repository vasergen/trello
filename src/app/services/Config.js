(function() {
    "use strict"

    angular.module("trello")
        .service('ServiceConfig', ServiceConfig)

    function ServiceConfig() {
        let getFirebaseBaseUrl = () => "https://vstrello.firebaseio.com/"

        //Public API
        return {
            getFirebaseBaseUrl
        }
    }
})()


