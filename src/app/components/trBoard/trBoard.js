"use strict"

angular.module("trello")
    .component("trBoard", {
        bindings: {
            board: '=',
            boardKey: '<'
        },
        controller: function(ServiceHelper, ServiceBoard) {
            this.toggleStarred = function() {
                this.board.starred = !this.board.starred
                this.board.updated = ServiceHelper.timestamp()

                ServiceBoard.update(this.boardKey, this.board)
            }

            this.remove = function() {
                ServiceBoard.remove(this.boardKey)
            }
        },
        templateUrl: "src/app/components/trBoard/trBoard.html"
    })