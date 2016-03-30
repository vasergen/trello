"use strict"

angular.module("trello")
    .component("trLists", {
        bindings: {
        },
        controller: function(ServiceList, $state) {
            let list = new ServiceList($state.params.boardKey)
            this.lists = null

            list.onValue((snapshot) => {
                this.lists = snapshot.val()
            })
        },
        templateUrl: 'src/app/components/trLists/trLists.html'
    })