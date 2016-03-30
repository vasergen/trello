"use strict"

angular.module("trello")
    .component("trTest", {
        bindings: {

        },
        controller: function(ServiceHelper) {
            this.translit = () => {
                let res = ServiceHelper.translit("вася йди додому!")
                console.log(res)
            }
        },
        templateUrl: "src/app/components/trTest/trTest.html"
    })