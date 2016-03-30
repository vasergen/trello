"use strict"

angular.module("trello")
    .component("trBoard", {
        bindings: {
            board: '=',
            boardKey: '<'
        },
        controller: function(ServiceHelper, ServiceBoard, $state) {
            this.toggleStarred = function() {
                this.board.starred = !this.board.starred
                ServiceBoard.update(this.boardKey, this.board)
            }

            this.remove = function() {
                ServiceBoard.remove(this.boardKey)
            }

            this.goToBoard = function() {
                $state.go('board', {
                    boardKey: this.boardKey,
                    slug: this.board.slug,
                    board: this.board
                })
            }
        },
        templateUrl: "src/app/components/trBoard/trBoard.html"
    })