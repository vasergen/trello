"use strict"

angular.module("trello")
    .component("trNewList", {
        bindings: {},
        controller: function(FactoryLists, ServiceHelper, $state) {
            let boardKey = $state.params.boardKey
            let Lists = new FactoryLists(boardKey)

            this.listName = ''
            this.isEdited = false
            this.inputId = ServiceHelper.randomString()

            let resetState = () => {
                this.listName = ''
                this.isEdited = false
            }

            this.startEdit = () => {
                this.isEdited = true
            }

            this.save = function() {
                let item = {
                    name: this.listName
                }

                Lists.push(item)
                    .then(resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                resetState()
            }
        },
        templateUrl: 'src/app/components/trNewList/trNewList.html'
    })