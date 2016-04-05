export default function CardController(FactoryCard, ServiceHelper, ServiceEvents, $state) {
    let self = this
    let boardKey = $state.params.boardKey
    let Card = new FactoryCard(boardKey, this.listKey, this.cardKey)

    this.isEdited = false

    ServiceEvents.subscribe('startEdit', (data) => {
        if(data.id == self.cardKey) {
            return null
        }

        self.resetState()
    })

    this.publishStartEdit = () => {
        ServiceEvents.publish('startEdit', {
            id: this.cardKey
        })
    }

    this.resetState = () => {
        self.isEdited = false
    }

    this.markDone = () => {
        this.card.isDone = !this.card.isDone

        Card
            .update(this.card)
            .then(this.resetState)
            .catch(ServiceHelper.logError)
    }

    this.startEdit = () => {
        this.isEdited = true
        this.publishStartEdit()
    }

    this.remove = function() {
        return Card.remove()
    }

    this.save = function() {
        return Card
            .update(this.card)
            .then(this.resetState)
            .catch(ServiceHelper.logError)
    }

    this.cancel = function() {
        this.resetState()
    }
}