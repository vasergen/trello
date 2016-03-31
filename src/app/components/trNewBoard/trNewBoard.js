"use strict"

angular.module("trello")
    .component("trNewBoard", {
        bindings: {},
        controller: function(FactoryBoards, ServiceHelper) {
            let Boards = new FactoryBoards()

            this.isEdited = false
            this.boardName = ''

            let resetState = () => {
                this.isEdited = false
                this.boardName = ''
            }

            this.save = function() {
                let item = {
                    name: this.boardName
                }
                return Boards
                    .push(item)
                    .then(resetState)
                    .catch(ServiceHelper.logError)
            }

            this.cancel = function() {
                resetState()
            }
        },
        templateUrl: 'src/app/components/trNewBoard/trNewBoard.html'
    })