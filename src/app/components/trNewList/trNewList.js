"use strict"

angular.module("trello")
    .component("trNewList", {
        bindings: {},
        controller: function(FactoryLists, ServiceHelper, ServiceEvents, $state) {
            let self = this
            let boardKey = $state.params.boardKey
            let Lists = new FactoryLists(boardKey)

            this.listName = ''
            this.isEdited = false
            this.inputId = ServiceHelper.randomString()
            this.listKey = ServiceHelper.randomString()

            this.resetState = () => {
                self.listName = ''
                self.isEdited = false
            }

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

            this.startEdit = () => {
                this.isEdited = true
                this.publishStartEdit()
            }

            this.save = function() {
                let item = {
                    name: this.listName
                }

                Lists.push(item)
                    .then(this.resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                this.resetState()
            }
        },
        templateUrl: 'src/app/components/trNewList/trNewList.html'
    })