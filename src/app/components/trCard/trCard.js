"use strict"

angular.module("trello")
    .component("trCard", {
        bindings: {
            card: '=',
            cardKey: '<',
            listKey: '<'
        },
        controller: function(FactoryCard, ServiceHelper, $state) {
            let boardKey = $state.params.boardKey
            let Card = new FactoryCard(boardKey, this.listKey, this.cardKey)

            this.isEdited = false

            let resetState = () => {
                this.isEdited = false
            }

            this.startEdit = () => {
                this.isEdited = true
            }

            this.remove = function() {
                return Card.remove()
            }

            this.save = function() {
                return Card
                    .update(this.card)
                    .then(resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                resetState()
            }
        },
        templateUrl: "src/app/components/trCard/trCard.html"
    })