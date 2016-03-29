"use strict"

angular.module("trello")
    .component("firebaseTest", {
        controller: function(ServiceFirebase, $q) {
            let HOST = "https://vstrello-test.firebaseio.com/test"
            let ref = new Firebase(HOST)



            this.test = function() {
                function async() {
                    return $q(function(resolve, reject) {
                        setTimeout(() => {
                            resolve(123)
                        }, 1000)
                    })
                }

                //async().then((data) => {
                //    console.log('then:', data)
                //})
            }
        },
        template: `
            <hr/>
            <h3>Firebase test</h3>
            <button ng-click="$ctrl.test()">TEST</button>
            <hr/>
        `
    })
    .component("trTest", {
        bindings: {

        },
        controller: function(ServiceBoard) {
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