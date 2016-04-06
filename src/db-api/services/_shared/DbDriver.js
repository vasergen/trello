import Firebase from 'firebase'

export default class DbDriver {
    constructor(ServiceConfig, ServiceHelper, $timeout, $q) {
        this.ServiceConfig = ServiceConfig
        this.ServiceHelper = ServiceHelper
        this.$timeout = $timeout
        this.$q = $q
        this.ref = new Firebase(this.ServiceConfig.getFirebaseBaseUrl())
    }

    /*Warning: need to implement in child */
    getScheme() {
        throw new Error('Error! Not implemented getScheme function')
    }

    /*Warning: need to implement in child */
    validate(item) {
        throw new Error('Error! Not implemented validate function')
    }

    _prepareItemForPush(item) {
        let itemRequiredFields = {
            id: this.ServiceHelper.randomString(),
            slug: this.ServiceHelper.slug(item.name),
            updated: this.ServiceHelper.timestamp(),
            timestamp: this.ServiceHelper.timestamp()
        }

        return Object.assign({}, this.getScheme(), item, itemRequiredFields)
    }

    _prepareItemForUpdate(item) {
        let itemRequiredFields = {
            slug: this.ServiceHelper.slug(item.name),
            updated: this.ServiceHelper.timestamp()
        }

        return Object.assign({}, item, itemRequiredFields)
    }

    push(item) {
        let self = this
        let validateMessage
        let preparedItem = this._prepareItemForPush(item)

        return this.$q(function(resolve, reject) {
            if(validateMessage = self.validate(preparedItem)) {
                return reject(validateMessage)
            }

            self.ref.push(preparedItem).then((response) => {
                return resolve(response)
            }).catch((err) => {
                return reject(err)
            })
        })
    }

    update(item) {
        let self = this
        let validateMessage
        let preparedItem = this._prepareItemForUpdate(item)

        return this.$q((resolve, reject) => {
            if(validateMessage = self.validate(preparedItem)) {
                return reject(new Error(validateMessage))
            }

            self.ref.update(preparedItem)
                .then((response) => {
                    return resolve(response)
                })
                .catch((err) => {
                    return reject(err)
                })
        })
    }

    onValue(fn, fnErr) {
        let self = this
        let _fn = fn || function() {}
        let _fnError = fnErr || function(err) {console.error(err)}

        return this.ref.on("value", (snapshot) => {
            self.$timeout(() => _fn(snapshot), 0) //$timeout - hack for angular, otherwise doesn't see changes
        }, _fnError)
    }

    remove(fn) {
        return this.ref.remove(fn)
    }
}