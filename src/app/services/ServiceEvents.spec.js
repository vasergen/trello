"use strict"

describe("Check ServiceEvents", () => {
    let ServiceEvents

    beforeEach(() => {
        module("trello")
        inject((_ServiceEvents_) => {
            ServiceEvents = _ServiceEvents_
        })
    })

    it("ServiceEvents should be defined", () => {
        let actual = !!ServiceEvents
        let expected = true

        expect(actual).toBe(expected)
    })

    it("ServiceEvents.subscribe should subscribe callback and ServiceEvents.publish should execute it", () => {
        let fn = jasmine.createSpy('fn')
        let data = {}
        ServiceEvents.subscribe('event', fn)
        ServiceEvents.publish('event', data)

        expect(fn).toHaveBeenCalledWith(data)
    })

    it("ServiceEvents.subscribe should not subscribe the same function on the event twice", () => {
        let fn = jasmine.createSpy('fn')
        ServiceEvents.subscribe('event', fn)
        ServiceEvents.subscribe('event', fn)
        ServiceEvents.publish('event', {})

        expect(fn).toHaveBeenCalledTimes(1)
    })

    it("one callback can be subscribed to many events", () => {
        let fn = jasmine.createSpy('fn')
        ServiceEvents.subscribe('event1', fn)
        ServiceEvents.subscribe('event2', fn)
        ServiceEvents.publish('event1')
        ServiceEvents.publish('event2')

        expect(fn).toHaveBeenCalledTimes(2)
    })

    it("ServiceEvents.unsubscribe should unsubscribe function", () => {
        let fn1 = jasmine.createSpy('fn1')
        let fn2 = jasmine.createSpy('fn2')

        ServiceEvents.subscribe('event', fn1)
        ServiceEvents.subscribe('event', fn2)
        ServiceEvents.publish('event')
        ServiceEvents.unsubscribe('event', fn1)
        ServiceEvents.publish('event')

        expect(fn1).toHaveBeenCalledTimes(1)
        expect(fn2).toHaveBeenCalledTimes(2)
    })
})