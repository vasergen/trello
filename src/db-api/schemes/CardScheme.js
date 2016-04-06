export default class CardScheme {
    constructor(ServiceHelper) {
        this.ServiceHelper = ServiceHelper
    }

    getScheme() {
        return {
            id: this.ServiceHelper.randomString(),
            timestamp: this.ServiceHelper.timestamp(),
            updated: this.ServiceHelper.timestamp(),
            name: '',
            slug: '',
            isDone: false
        }
    }

    validate(item) {
        if(!this.ServiceHelper.trimName(item))
            return 'Card Validate Error: Empty name'

        return false
    }
}