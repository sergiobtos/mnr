import ContestList from "./contest-list"
import Header from "./header"

const App = ({initialData}) => {
    return (
    <div className="container">
        <Header message="Naming Contests" />
        <ContestList initialContests={{initialData}} />
    </div>
    )
}

export default App