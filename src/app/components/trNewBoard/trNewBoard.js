"use strict"

angular.module("trello")
    .component("trNewBoard", {
        bindings: {},
        controller: function(ServiceBoard) {
            this.isEdited = false
            this.boardName = ''

            this.resetState = function() {
                this.isEdited = false
                this.boardName = ''
            }

            this.save = function() {
                return ServiceBoard
                    .push({
                        name: this.boardName
                    })
                    .then(() => {
                        this.resetState()
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            }

            this.cancel = function() {
                this.resetState()
            }
        },
        templateUrl: 'src/app/components/trNewBoard/trNewBoard.html'
    })