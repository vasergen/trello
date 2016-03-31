"use strict"

angular.module("trello")
    .component("trList", {
        bindings: {
            list: '=',
            listKey: '<'
        },
        controller: function(FactoryList, FactoryCards, $state) {
            let boardKey = $state.params.boardKey
            let List = new FactoryList(boardKey, this.listKey)
            let Cards = new FactoryCards(boardKey, this.listKey)

            this.cards = null

            Cards.onValue((snapshot) => {
                this.cards = snapshot.val()
            })

            this.removeList = function() {
                List.remove()
            }
        },
        templateUrl: 'src/app/components/trList/trList.html'
    })