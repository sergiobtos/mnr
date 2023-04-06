import { useEffect, useState } from "react"
import ContestList from "./contest-list"
import Contest from "./contest"

const App = ({initialData}) => {
    const [page, setPage] = useState<"contestList" | "contest">(initialData.currentContest ? "contest" : "contestList")
    const [currentContest, setCurrentContest] = useState<object | undefined>(initialData.currentContest);
    const [currentContestId, setCurrentContestId] = useState<string | undefined>(initialData.currentContest?.id);

    useEffect(()=>{
        window.onpopstate = (ev) => {
            const newPage = ev.state?.contestId ? "contest" : "contestList"
            setPage(newPage)
            setCurrentContest({id: ev.state?.contestId})
        }
    },[])

    const navigateToContest = (contestId: string) => {
        window.history.pushState({contestId},"",`/contest/${contestId}`)
        setPage("contest")
        setCurrentContest({id: contestId})
    }

    const navigateToContestList = () => {
        window.history.pushState({},"","/")
        setPage("contestList")
        setCurrentContest(undefined)
    }

    const pageContent = () => {
        switch(page) {
            case "contestList":
                return <ContestList initialContests={{initialData}} onContestClick={navigateToContest} />
            case "contest":
                return <Contest initialContest={currentContest} onContestListClick={navigateToContestList} />
            default:
                return <></>
        }
    }

    return (
    <div className="container">
        {pageContent()}
    </div>
    )
}

export default App