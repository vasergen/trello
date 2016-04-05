import boardController from './trBoardController.js'
import boardTemplate from './trBoard.html'

export default {
    bindings: {
        board: '=',
        boardKey: '<'
    },
    controller: boardController,
    template: boardTemplate
}