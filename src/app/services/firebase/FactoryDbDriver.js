    "use strict"

    angular.module("trello")
        .factory('FactoryDbDriver', FactoryDbDriver)

    function FactoryDbDriver($timeout, ServiceConfig, Firebase, ServiceHelper, $q) {
        return function() {
            let self = this

            /*Warning: need to redefine in child*/
            self.ref = new Firebase(ServiceConfig.getFirebaseBaseUrl())

            /*Warning: need to implement in child */
            self.getScheme = () => {
                throw new Error('Error! Not implemented getScheme function')
            }

            /*Warning: need to implement in child */
            self.validate = (item) => {
                throw new Error('Error! Not implemented validate function')
            }

            self._prepareForPush = (item) => {
                let itemFields = {
                    id: ServiceHelper.randomString(),
                    slug: ServiceHelper.slug(item.name),
                    updated: ServiceHelper.timestamp(),
                    timestamp: ServiceHelper.timestamp()
                }

                return Object.assign({}, self.getScheme(), item, itemFields)
            }
            self._prepareForUpdate = (item) => {
                let itemFields = {
                    slug: ServiceHelper.slug(item.name),
                    updated: ServiceHelper.timestamp()
                }

                return Object.assign({}, item, itemFields)
            }
            self._beforePush = (item) => {
                return self._prepareForPush(item)
            }
            self._beforeUpdate = (item) => {
                return self._prepareForUpdate(item)
            }

            self.push = (item) => {
                item = self._beforePush(item)

                let validateMessage

                return $q(function(resolve, reject) {
                    if(validateMessage = self.validate(item)) {
                        return reject(validateMessage)
                    }

                    self.ref.push(item).then((response) => {
                        return resolve(response)
                    }).catch((err) => {
                        return reject(err)
                    })
                })
            }
            self.onValue = (fn, fnErr) => {
                let _fn = fn || function() {}
                let _fnError = fnErr || function(err) {console.error(err)}

                return self.ref.on("value", (snapshot) => {
                    $timeout(() => _fn(snapshot), 0)
                }, _fnError)
            }

            self.update = (item) => {
                item = self._beforeUpdate(item)

                let validateMessage

                return $q((resolve, reject) => {
                    if(validateMessage = self.validate(item)) {
                        return reject(new Error(validateMessage))
                    }

                    self.ref.update(item)
                        .then((response) => {
                            return resolve(response)
                        })
                        .catch((err) => {
                            return reject(err)
                        })
                })
            }
            self.remove = (fn) => {
                return self.ref.remove(fn)
            }

            return self
        }
    }