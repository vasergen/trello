import EditedElementController from './../../_jsShared/EditedElementController.js'

let Card = null

export default class CardController extends EditedElementController{
    constructor(ServiceEvents, ServiceHelper, FactoryCard, $state) {
        super(ServiceEvents, ServiceHelper)

        this.boardKey = $state.params.boardKey
        this.elementId = this.cardKey
        Card = new FactoryCard(this.boardKey, this.listKey, this.cardKey)
    }

    markDone () {
        this.card.isDone = !this.card.isDone

        Card
            .update(this.card)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }

    remove() {
        return Card.remove()
    }

    save() {
        return Card
            .update(this.card)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }
}