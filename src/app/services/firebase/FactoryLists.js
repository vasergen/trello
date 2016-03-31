"use strict"

angular.module("trello")
    .factory("FactoryLists", FactoryLists)

function FactoryLists(FactoryDbDriver, ListScheme) {
    return function(boardKey) {
        if(!boardKey)
            throw new Error('Lists Error! Does not provided boardKey')

        let self = new FactoryDbDriver()
        self.ref = self.ref.child("lists").child(boardKey)
        self.getScheme = ListScheme.getScheme
        self.validate = ListScheme.validate

        return self
    }
}