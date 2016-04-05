export default function ServiceEvents() {
    //private
    let events = new Map()

    //public API
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

    function getEvent(event) {
        if(!events.has(event))
            events.set(event, new Set())

        return events.get(event)
    }
}