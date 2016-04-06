import EditedElementController from './../_shared/EditedElementController.js'

export default class NewListController extends EditedElementController {
    constructor(ServiceEvents, ServiceHelper, FactoryLists, $state) {
        super(ServiceEvents, ServiceHelper)

        this.boardKey = $state.params.boardKey
        this.ListsDB = new FactoryLists(this.boardKey)
        this.elementId = ServiceHelper.randomString()
        this.inputId = ServiceHelper.randomString()
        this.isEdited = false
        this.listName = ''
    }

    resetState() {
        super.resetState()
        this.listName = ''
    }

    save() {
        let item = {
            name: this.listName
        }

        this.ListsDB
            .push(item)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }
}