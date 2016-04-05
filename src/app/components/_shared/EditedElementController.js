export default class EditedElementController{
        constructor(ServiceEvents, ServiceHelper) {
            this.ServiceEvents = ServiceEvents
            this.ServiceHelper = ServiceHelper
            this.isEdited = false
            this.elementId = null /*Warning: Need to define in child*/

            this.activate()
        }

        activate() {
            let self = this

            this.ServiceEvents.subscribe('startEdit', (data) => {
                if(data.id == self.elementId) {
                    return null
                }

                self.resetState()
            })
        }

        publishEventStartEdit() {
            let self = this
            this.ServiceEvents.publish('startEdit', {
                id: self.elementId
            })
        }

        startEdit() {
            this.isEdited = true
            this.publishEventStartEdit()
        }

        resetState() {
            this.isEdited = false
        }

        cancel() {
            this.resetState()
        }
    }