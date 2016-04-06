export default function FactoryLists(FactoryDbDriver, ListScheme) {
    return function(boardKey) {
        if(!boardKey)
            throw new Error('Lists Error! Does not provided boardKey')

        let ListsDB = new FactoryDbDriver()
        ListsDB.ref = ListsDB.ref.child("lists").child(boardKey)
        ListsDB.getScheme = () => ListScheme.getScheme()
        ListsDB.validate = (item) => ListScheme.validate(item)
        return ListsDB
    }
}