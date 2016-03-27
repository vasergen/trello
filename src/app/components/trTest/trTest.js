"use strict"

angular.module("trello")
    .component("trTest", {
        bindings: {

        },
        controller: function($timeout, ServiceBoard) {
            this.boardName = ''
            this.boards = null

            ServiceBoard.onValue((snapshot) => {
                this.boards = snapshot.val()
            })

            this.boardRemove = (key) => {
                ServiceBoard.remove(key)
            }

            this.boardPush = () => {
                return ServiceBoard.push({
                    name: this.boardName
                }).then((data) => {
                    this.boardName = ''
                }).catch((err) => {
                    console.error(err)
                })
            }
        },
        templateUrl: "src/app/components/trTest/trTest.html"
    })