"use strict"

describe("Routes Spec", () => {
    let $rootScope
    let $location

    beforeEach(() => {
        module("trello")

        inject(($injector) => {
            $location = $injector.get('$location')
            $rootScope = $injector.get('$rootScope')
        })
    })

    it("module ui.router should be defined", () => {
        expect(angular.module("ui.router")).toBeTruthy()
    })
})