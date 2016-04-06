export default class ListsController {
    constructor(FactoryLists, $state) {
        this.boardKey = $state.params.boardKey
        this.ListsDB = new FactoryLists(this.boardKey)
        this.lists = null

        this.activate()
    }

    activate() {
        this.ListsDB.onValue((snapshot) => {
            this.lists = snapshot.val()
        })
    }
}