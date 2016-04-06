import EditedElementController from './../_shared/EditedElementController.js'

export default class CardController extends EditedElementController{
    constructor(ServiceEvents, ServiceHelper, FactoryCard, $state) {
        super(ServiceEvents, ServiceHelper)
        this.elementId = this.cardKey
        this.boardKey = $state.params.boardKey
        this.CardDB = new FactoryCard(this.boardKey, this.listKey, this.cardKey)
    }

    markDone () {
        this.card.isDone = !this.card.isDone

        this.CardDB
            .update(this.card)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }

    remove() {
        return this.CardDB
            .remove()
            .catch(this.ServiceHelper.logError)
    }

    save() {
        return this.CardDB
            .update(this.card)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }
}