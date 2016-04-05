import EditedElementController from './../_shared/EditedElementController.js'

export default class ListController extends EditedElementController {
    constructor(ServiceEvents, ServiceHelper, FactoryList, FactoryCards, $state) {
        super(ServiceEvents, ServiceHelper)

        this.elementId = this.listKey
        this.boardKey = $state.params.boardKey
        this.ListDB = new FactoryList(this.boardKey, this.listKey)
        this.CardsDB = new FactoryCards(this.boardKey, this.listKey)

        this.inputId = ServiceHelper.randomString()
        this.cards = null
        this.isEdited = false
        this.progress = 0

        this.CardsDB.onValue((snapshot) => {
            this.cards = this.getSortedCards(snapshot)
            this.progress = this.calcProgress(snapshot)
        })
    }

    save() {
        let item = {
            name: this.list.name
        }

        this.ListDB.update(item)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }

    removeList() {
        this.ListDB
            .remove()
            .catch(this.ServiceHelper.logError)
    }

    getSortedCards(snapshot) {
        let cards = snapshot.val()
        let sortedCards = {}

        for(let cardKey in cards) {
            let card = cards[cardKey]

            if(!card.isDone)
                sortedCards[cardKey] = card
        }

        for(let cardKey in cards) {
            let card = cards[cardKey]

            if(card.isDone)
                sortedCards[cardKey] = card
        }

        return sortedCards
    }

    calcProgress(snapshot) {
        let cards = snapshot.val()

        if(!cards) {
            return 0
        }

        let all = Object.keys(cards).length
        let done = 0

        for(let cardKey in cards) {
            let card = cards[cardKey]
            if(card.isDone) {
                done++
            }
        }

        return 100 * done / all
    }
}