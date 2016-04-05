export default class EditedElementController{
        constructor(ServiceEvents, ServiceHelper) {
            this.ServiceEvents = ServiceEvents
            this.ServiceHelper = ServiceHelper
            this.elementId = null /*Warning: should be defined in child*/
            this.isEdited = false

            this.activate()
        }
        publishStartEdit() {
            let self = this
            this.ServiceEvents.publish('startEdit', {
                id: self.elementId
            })
        }
        startEdit() {
            this.isEdited = true
            this.publishStartEdit()
        }
        resetState() {
            this.isEdited = false
        }
        save() { /*Warning: should be defined in child*/
            throw new Error('should be defined in child')
        }
        cancel() {
            this.resetState()
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
    }
