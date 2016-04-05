export default function BoardScheme(ServiceHelper) {
    this.getScheme = function() {
        return {
            id: ServiceHelper.randomString(),
            timestamp: ServiceHelper.timestamp(),
            updated: ServiceHelper.timestamp(),
            name: '',
            slug: '',
            starred: false
        }
    }

    this.validate = function(item) {
        if(!ServiceHelper.trimName(item))
            return 'Board Validate Error: Empty name'

        return false
    }
}