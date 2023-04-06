import { useEffect, useState } from "react"
import ContestPreview from "./contest-preview"
import { fecthContests } from "../api-client"
import Header from "./header"

const ContestList = ({initialContests, onContestClick}) => {
    const [contests, setContests] = useState(initialContests ?? [])

    useEffect(()=>{
        if(!initialContests){
            fecthContests().then((contests) => {
                setContests(contests)
            })
        }   
    },[initialContests])

    return (
        <>
            <Header message="Naming Contests" />
            <div className="contest-list">
            {contests.map((el: any) => {
                return <ContestPreview key={el.id} contest={el} onClick={onContestClick} />
            })}
        </div>
        </>
       
    )
}

export default ContestList