"use strict"

angular.module("trello")
    .component("trBoardHeader", {
        bindings: {},
        controller: function($state, ServiceBoard) {
            let boardKey = $state.params.boardKey

            this.board = null
            ServiceBoard.onBoard(boardKey, (snapshot) => {
                this.board = snapshot.val()
            })
        },
        templateUrl: 'src/app/components/trBoardHeader/trBoardHeader.html'
    })
