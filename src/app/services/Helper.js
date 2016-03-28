(function() {
    "use strict"

    angular.module("trello")
        .service("ServiceHelper", ServiceHelper)

    ServiceHelper.$inject = ['_']

    function ServiceHelper(_) {
        let trimName = _.flow(_.get('name'), _.trim)
        let timestamp = Date.now

        //Public API
        return {
            trimName,
            timestamp,
            randomString
        }

        //Function Declaration Section
        /**
         * Generate random string
         * @param length
         * @returns {string}
         */
        function randomString(len) {
            let length = len || 16
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')

            var str = ''
            for (var i = 0; i < length; i++) {
                str += chars[Math.floor(Math.random() * chars.length)]
            }
            return str
        }
    }
})()