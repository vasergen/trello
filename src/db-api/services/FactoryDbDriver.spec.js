"use strict"

describe("Check FactoryDbDriver", () => {
    let FactoryDbDriver
    let $q
    let $rootScope
    let $timeout

    beforeEach(() => {
        module("trello")

        inject((_FactoryDbDriver_, _$q_, _$rootScope_, _$timeout_) => {
            FactoryDbDriver = _FactoryDbDriver_
            $q = _$q_
            $rootScope = _$rootScope_
            $timeout = _$timeout_
        })
    })

    describe("test push", () => {
        let dbDriver
        beforeEach(() => {
            dbDriver = new FactoryDbDriver()
            dbDriver.getScheme = () => {}
            dbDriver.validate = () => {}
        })

        it("push should return a promise", () => {
            let actual = dbDriver.push({})
            let expected = $q.defer().promise

            expect(actual).toEqual(expected)
        })

        it("push should be rejected", (done) => {
            spyOn(dbDriver, '_beforePush').and.returnValue({name: ''})
            spyOn(dbDriver, 'validate').and.returnValue('Validate Failed!')
            dbDriver.push()
                .then(() => {})
                .catch((err) => {
                    let actual = err
                    let expected = 'Validate Failed!'

                    expect(actual).toBe(expected)
                    done()
                })
            $rootScope.$apply()
        })

        it("push should be resolved", () => {

        })
    })
})