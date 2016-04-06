export default function FactoryCards(FactoryList, CardScheme) {
    return function(boardKey, listKey) {
        if(!boardKey)
            throw new Error('Cards Error! Does not provided boardKey')

        if(!listKey)
            throw new Error('Cards Error! Does not provided listKey')

        let CardsDB = new FactoryList(boardKey, listKey)
        CardsDB.ref = CardsDB.ref.child('cards')
        CardsDB.getScheme = () => CardScheme.getScheme()
        CardsDB.validate = (item) => CardScheme.validate(item)
        return CardsDB
    }
}