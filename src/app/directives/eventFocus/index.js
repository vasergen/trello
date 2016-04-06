/**
 * Set focus on element
 * Example: <div event-focus="click" event-focus-id="email">Focus email</div>
 */
export default function EventFocus($timeout, $window) {
    function focus(id) {
        // timeout makes sure that is invoked after any other event has been triggered.
        // e.g. click events that need to run before the focus or
        // inputs elements that are in a disabled state but are enabled when those events
        // are triggered.
        $timeout(function() {
            var element = $window.document.getElementById(id)
            if(element)
                element.focus()
        }, 0)
    }

    return function(scope, elem, attr) {
        elem.on(attr.eventFocus, function() {
            focus(attr.eventFocusId)
        })

        // Removes bound events in the element itself
        // when the scope is destroyed
        scope.$on('$destroy', function() {
            elem.off(attr.eventFocus)
        })
    }
}