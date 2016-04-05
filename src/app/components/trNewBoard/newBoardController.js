import EditedElementController from './../_shared/EditedElementController.js'

export default class NewBoardController extends EditedElementController {
    constructor(ServiceEvents, ServiceHelper, FactoryBoards) {
        super(ServiceEvents, ServiceHelper)

        this.BoardsDB = new FactoryBoards()
        this.elementId = ServiceHelper.randomString()
        this.inputId = ServiceHelper.randomString()
        this.isEdited = false
        this.boardName = ''
    }

    resetState() {
        super.resetState()
        this.boardName = ''
    }

    save() {
        let item = {
            name: this.boardName
        }
        return this.BoardsDB
            .push(item)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }
}