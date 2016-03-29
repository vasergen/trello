"use strict"

angular.module("trello")
    .component("trBoards", {
        bindings: {},
        controller: function(ServiceBoard) {
            this.boards = null

            ServiceBoard.onValue((snapshot) => {
                this.boards = snapshot.val()
            })
        },
        templateUrl: 'src/app/components/trBoards/trBoards.html'
    })