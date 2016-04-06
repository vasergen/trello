export default class BoardHeaderController {
    constructor($state, FactoryBoard) {
        this.boardKey = $state.params.boardKey
        this.board = null
        this.BoardDB = new FactoryBoard(this.boardKey)

        this.activate()
    }

    activate() {
        this.BoardDB.onValue((snapshot) => {
            this.board = snapshot.val()
        })
    }
}