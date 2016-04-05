export default function NewBoardController(FactoryBoards, ServiceHelper) {
    let Boards = new FactoryBoards()

    this.isEdited = false
    this.boardName = ''
    this.inputId = ServiceHelper.randomString()

    let resetState = () => {
        this.isEdited = false
        this.boardName = ''
    }

    this.startEdit = () => {
        this.isEdited = true
    }

    this.save = function() {
        let item = {
            name: this.boardName
        }
        return Boards
            .push(item)
            .then(resetState)
            .catch(ServiceHelper.logError)
    }

    this.cancel = function() {
        resetState()
    }
}