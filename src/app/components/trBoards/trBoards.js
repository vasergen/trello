"use strict"

angular.module("trello")
    .component("trBoards", {
        bindings: {},
        controller: function(FactoryBoards) {
            this.boards = null

            let Boards = FactoryBoards()
            Boards.onValue((snapshot) => {
                this.boards = snapshot.val()
            })
        },
        templateUrl: 'src/app/components/trBoards/trBoards.html'
    })