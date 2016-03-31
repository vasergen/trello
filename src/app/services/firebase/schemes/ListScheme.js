"use strict"

angular.module("trello")
    .service('ListScheme', ListScheme)

function ListScheme(ServiceHelper) {
    this.getScheme = function() {
        return {
            id: ServiceHelper.randomString(),
            timestamp: ServiceHelper.timestamp(),
            updated: ServiceHelper.timestamp(),
            name: '',
            slug: ''
        }
    }

    this.validate = function(item) {
        if(!ServiceHelper.trimName(item))
            return 'List Validate Error: Empty name'

        return false
    }
}