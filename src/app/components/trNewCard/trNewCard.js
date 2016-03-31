"use strict"

angular.module("trello")
    .component("trNewCard", {
        bindings: {
            listKey: '<'
        },
        controller: function(FactoryCards, ServiceHelper, ServiceEvents, $state) {
            let self = this
            let boardKey = $state.params.boardKey
            let Cards = new FactoryCards(boardKey, this.listKey)

            this.isEdited = false
            this.cardName = ''
            this.inputId = ServiceHelper.randomString()
            this.cardKey = ServiceHelper.randomString()

            this.resetState = () => {
                self.isEdited = false
                self.cardName = ''
            }

            ServiceEvents.subscribe('startEdit', (data) => {
                if(data.id == self.cardKey) {
                    return null
                }

                self.resetState()
            })

            this.publishStartEdit = () => {
                ServiceEvents.publish('startEdit', {
                    id: this.cardKey
                })
            }

            this.startEdit = () => {
                this.isEdited = true
                this.publishStartEdit()
            }

            this.save = function() {
                let item = {
                    name: this.cardName
                }

                return Cards
                        .push(item)
                        .then(this.resetState)
                        .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                this.resetState()
            }
        },
        templateUrl: 'src/app/components/trNewCard/trNewCard.html'
    })