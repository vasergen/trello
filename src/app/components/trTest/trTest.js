"use strict"

angular.module("trello")
    .component("trTest", {
        bindings: {

        },
        controller: function(FactoryDbDriver, FactoryBoards) {
            let Boards = new FactoryBoards()

            this.boards = null

            //Boards.onValue((snapshot) => {
            //    this.boards = snapshot.val()
            //    console.log('this.boards', this.boards);
            //})

            this.test = function() {
                Boards.push({name: 'test'})
            }

        },
        templateUrl: "src/app/components/trTest/trTest.html"
    })