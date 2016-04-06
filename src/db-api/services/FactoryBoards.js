export default function FactoryBoards(FactoryDbDriver, BoardScheme) {
    return function() {
        let BoardsDB = new FactoryDbDriver()

        BoardsDB.ref = BoardsDB.ref.child("boards")
        BoardsDB.getScheme = () => BoardScheme.getScheme()
        BoardsDB.validate= (item) => BoardScheme.validate(item)
        return BoardsDB
    }
}