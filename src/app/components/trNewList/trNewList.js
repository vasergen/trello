"use strict"

angular.module("trello")
    .component("trNewList", {
        bindings: {},
        controller: function(ServiceList, ServiceHelper, $state) {
            let boardKey = $state.params.boardKey
            let listInstance = new ServiceList(boardKey)

            this.listName = ''
            this.isEdited = false

            let resetState = () => {
                this.listName = ''
                this.isEdited = false
            }

            this.save = function() {
                let item = {
                    name: this.listName
                }

                listInstance.push(item)
                    .then(resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                resetState()
            }
        },
        templateUrl: 'src/app/components/trNewList/trNewList.html'
    })