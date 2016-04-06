export default function FactoryCards(FactoryList, CardScheme) {
    return function(boardKey, listKey) {
        if(!boardKey)
            throw new Error('Cards Error! Does not provided boardKey')

        if(!listKey)
            throw new Error('Cards Error! Does not provided listKey')

        let self = new FactoryList(boardKey, listKey)
        self.ref = self.ref.child('cards')
        self.getScheme = () => CardScheme.getScheme()
        self.validate = () => CardScheme.validate()
        return self
    }
}