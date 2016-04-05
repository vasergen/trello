export default function ListsController(FactoryLists, $state) {
    let boardKey = $state.params.boardKey
    let Lists = new FactoryLists(boardKey)

    this.lists = null

    Lists.onValue((snapshot) => {
        this.lists = snapshot.val()
    })
}