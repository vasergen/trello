export default function FactoryBoards(FactoryDbDriver, BoardScheme) {
    return function() {
        let self = new FactoryDbDriver()
        self.ref = self.ref.child("boards")
        self.getScheme = () => BoardScheme.getScheme()
        self.validate = () => BoardScheme.validate()
        return self
    }
}