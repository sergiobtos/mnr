import { useEffect, useState } from "react"
import { fecthContest } from "../api-client"
import Header from "./header"

const Contest = ({initialContest, onContestListClick}) => {
    const [contest, setContest] = useState<any>(initialContest)

    useEffect(()=>{
        if(!contest.names){
            fecthContest(contest.id).then((contest) => {
                setContest(contest)
            })
        } 
    },[contest.id, contest.names])

    const handleClickContestList = (event) =>{
        event.preventDefault();
        onContestListClick();
    }

    return(
        <>
        {
            contest ?
                (
                    <>
                    <Header message={contest.contestName} />
                    <div className = "contest" >
                        <div className="title">Contest Description</div>
                        <div className="description">{contest.description}</div>
                        <a href="/" className="link" onClick={handleClickContestList}>Contest List</a>
                    </div >
                    </>
                ) : (
                    <h1>Loading....</h1>
                )
        }  
        </>     
    )
}

export default Contest