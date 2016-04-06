"use strict"

describe("Check Service Translit", () => {
    let ServiceTranslit

    beforeEach(() => {
        module("trello")

        inject((_ServiceTranslit_) => {
            ServiceTranslit = _ServiceTranslit_
        })
    })

    it("should return translit", () => {
        let actual = ServiceTranslit.translit('йцукен')
        let expected = 'ytsuken'

        expect(actual).toBe(expected)
    })
})