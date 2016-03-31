"use strict"

angular.module("trello")
    .factory("FactoryList", FactoryList)

function FactoryList(FactoryLists) {
    return function(boardKey, listKey) {
        if(!boardKey)
            throw new Error('Lists Error! Does not provided boardKey')

        if(!listKey)
            throw new Error('Lists Error! Does not provided listKey')

        let self = new FactoryLists(boardKey)
        self.ref = self.ref.child(listKey)

        return self
    }
}