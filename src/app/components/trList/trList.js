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

            this.getSortedCards = (snapshot) => {
                let cards = snapshot.val()
                let sortedCards = {}

                for(let cardKey in cards) {
                    let card = cards[cardKey]

                    if(!card.isDone)
                        sortedCards[cardKey] = card
                }

                for(let cardKey in cards) {
                    let card = cards[cardKey]

                    if(card.isDone)
                        sortedCards[cardKey] = card
                }

                return sortedCards
            }

            Cards.onValue((snapshot) => {
                this.cards = this.getSortedCards(snapshot)
            })

            this.removeList = function() {
                List.remove()
            }
        },
        templateUrl: 'src/app/components/trList/trList.html'
    })