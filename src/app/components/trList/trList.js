"use strict"

angular.module("trello")
    .component("trList", {
        bindings: {
            list: '=',
            listKey: '<'
        },
        controller: function(ServiceList, ServiceCard, $state) {
            let boardKey = $state.params.boardKey
            let listInstance = new ServiceList(boardKey)
            let cardInstance = new ServiceCard(boardKey, this.listKey)

            this.cards = null

            cardInstance.onValue((snapshot) => {
                this.cards = snapshot.val()
            })

            this.removeList = function() {
                listInstance.remove(this.listKey)
            }
        },
        templateUrl: 'src/app/components/trList/trList.html'
    })