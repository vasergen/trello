"use strict"

angular.module("trello")
    .service("ServiceEvents", function() {
        //private
        let events = new Map()

        function getEvent(event) {
            if(!events.has(event))
                events.set(event, new Set())

            return events.get(event)
        }

        //public
        return {
            subscribe(event, listener) {
                getEvent(event).add(listener)
            },
            unsubscribe(event, listener) {
                getEvent(event).delete(listener)
            },
            publish(event, data) {
                getEvent(event).forEach(listener => listener(data))
            }
        }
    })