import { useEffect, useState } from "react"
import ContestPreview from "./contest-preview"
import { fecthContests } from "../api-client"

const ContestList = ({initialContests}) => {
    const [contests, setContests] = useState([])

    useEffect(()=>{
        fecthContests().then((contests) => {
            setContests(contests)
        })
    },[])

    return (
        <div className="contest-list">
            {contests.map((el: any) => {
                return <ContestPreview key={el.id} contest={el} />
            })}
        </div>
    )
}

export default ContestList