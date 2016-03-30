"use strict"

angular.module("trello")
    .component("trCard", {
        bindings: {
            card: '=',
            cardKey: '<',
            listKey: '<'
        },
        controller: function(ServiceCard, ServiceHelper, $state) {
            let boardKey = $state.params.boardKey
            let cardInstance = new ServiceCard(boardKey, this.listKey)

            this.isEdited = false

            let resetState = () => {
                this.isEdited = false
            }

            this.remove = function() {
                return cardInstance.remove(this.cardKey)
            }

            this.save = function() {
                let item = {
                    name: this.card.name
                }

                return cardInstance
                    .update(this.cardKey, item)
                    .then(resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                resetState()
            }
        },
        templateUrl: "src/app/components/trCard/trCard.html"
    })