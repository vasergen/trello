export default class BoardsController {
    constructor(FactoryBoards) {
        this.boards = null
        this.BoardsDB = FactoryBoards()

        this.activate()
    }
    activate() {
        this.BoardsDB.onValue((snapshot) => {
            this.boards = snapshot.val()
        })
    }
}