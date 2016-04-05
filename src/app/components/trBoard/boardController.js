export default function BoardController(FactoryBoard, $state) {
    let Board = new FactoryBoard(this.boardKey)

    this.toggleStarred = function() {
        this.board.starred = !this.board.starred
        Board.update(this.board)
    }

    this.remove = function() {
        Board.remove()
    }

    this.goToBoard = function() {
        $state.go('board', {
            boardKey: this.boardKey,
            slug: this.board.slug
        })
    }
}