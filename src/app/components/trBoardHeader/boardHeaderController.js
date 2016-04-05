export default function BoardHeaderController($state, FactoryBoard) {
    let boardKey = $state.params.boardKey
    let Board = new FactoryBoard(boardKey)

    this.board = null
    Board.onValue((snapshot) => {
        this.board = snapshot.val()
    })
}