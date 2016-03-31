"use strict"

xdescribe("Check ServiceList", () => { //TODO: remove x
    let ServiceList

    beforeEach(() => {
        module("trello")

        inject((_ServiceList_) => {
            ServiceList = _ServiceList_
        })
    })

    it("ServiceList should be defined", () => {
        expect(ServiceList).toBeTruthy()
    })

    describe("Check ServiceList.push", () => {
        beforeEach(() => {

        })

        it("implement ServiceList", () => {
            //TODO:
        })

    })
})