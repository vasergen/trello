"use strict"

angular.module("trello")
    .component("trLists", {
        bindings: {
        },
        controller: function(FactoryLists, $state) {
            let boardKey = $state.params.boardKey
            let Lists = new FactoryLists(boardKey)

            this.lists = null

            Lists.onValue((snapshot) => {
                this.lists = snapshot.val()
            })
        },
        templateUrl: 'src/app/components/trLists/trLists.html'
    })