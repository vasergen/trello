export default class BoardController {
    constructor(FactoryBoard, ServiceHelper, $state) {
        this.BoardDB = new FactoryBoard(this.boardKey)
        this.ServiceHelper = ServiceHelper
        this.$state = $state
    }

    toggleStarred() {
        this.board.starred = !this.board.starred
        this.BoardDB
            .update(this.board)
            .catch(this.ServiceHelper.logError)
    }

    remove() {
        this.BoardDB
            .remove()
            .catch(this.ServiceHelper.logError)
    }

    goToBoard() {
        this.$state.go('board', {
            boardKey: this.boardKey,
            slug: this.board.slug
        })
    }
}