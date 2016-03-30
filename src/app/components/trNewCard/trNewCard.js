"use strict"

angular.module("trello")
    .component("trNewCard", {
        bindings: {
            listKey: '<'
        },
        controller: function(ServiceCard, ServiceHelper, $state) {
            let boardKey = $state.params.boardKey
            let cardInstance = new ServiceCard(boardKey, this.listKey)

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

                return cardInstance
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