"use strict"

angular.module("trello")
    .component("trBoardHeader", {
        bindings: {},
        controller: function($state, FactoryBoard) {
            let boardKey = $state.params.boardKey
            let Board = new FactoryBoard(boardKey)

            this.board = null
            Board.onValue((snapshot) => {
                this.board = snapshot.val()
            })
        },
        templateUrl: 'src/app/components/trBoardHeader/trBoardHeader.html'
    })
