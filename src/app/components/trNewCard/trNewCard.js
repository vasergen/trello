"use strict"

angular.module("trello")
    .component("trNewCard", {
        bindings: {
            listKey: '<'
        },
        controller: function(FactoryCards, ServiceHelper, $state) {
            let boardKey = $state.params.boardKey
            let Cards = new FactoryCards(boardKey, this.listKey)

            this.isEdited = false
            this.cardName = ''

            let resetState = () => {
                this.isEdited = false
                this.cardName = ''
            }

            this.save = function() {
                let item = {
                    name: this.cardName
                }

                return Cards
                        .push(item)
                        .then(resetState)
                        .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                resetState()
            }
        },
        templateUrl: 'src/app/components/trNewCard/trNewCard.html'
    })