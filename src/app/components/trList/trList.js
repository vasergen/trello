"use strict"

angular.module("trello")
    .component("trList", {
        bindings: {
            list: '=',
            listKey: '<'
        },
        controller: function(ServiceHelper, FactoryList, FactoryCards, ServiceEvents, $state) {
            let self = this
            let boardKey = $state.params.boardKey
            let List = new FactoryList(boardKey, this.listKey)
            let Cards = new FactoryCards(boardKey, this.listKey)


            this.cards = null
            this.inputId = ServiceHelper.randomString()
            this.isEdited = false

            ServiceEvents.subscribe('startEdit', (data) => {
                if(data.id == self.listKey) {
                    return null
                }

                self.resetState()
            })

            this.publishStartEdit = () => {
                ServiceEvents.publish('startEdit', {
                    id: this.listKey
                })
            }

            this.resetState = () => {
                this.isEdited = false
            }

            this.startEdit = () => {
                this.isEdited = true
                this.publishStartEdit()
            }

            this.save = () => {
                let item = {
                    name: this.list.name
                }

                List.update(item)
                    .then(self.resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = () => {
                this.resetState()
            }

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