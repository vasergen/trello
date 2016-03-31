"use strict"

angular.module("trello")
    .service('CardScheme', CardScheme)

function CardScheme(ServiceHelper) {
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
            return 'Card Validate Error: Empty name'

        return false
    }
}