export default function BoardsController(FactoryBoards) {
    this.boards = null

    let Boards = FactoryBoards()
    Boards.onValue((snapshot) => {
        this.boards = snapshot.val()
    })
}