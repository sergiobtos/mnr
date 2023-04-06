import ReactDOMServer from "react-dom/server"
import { fecthContest, fecthContests } from "../api-client"
import App from "../components/app"

const serverRender = async (req) => {
    const {contestId} = req.params
    const initialData = contestId 
    ? { currentContest: await fecthContest(contestId) } 
    : { contests: await fecthContests() }

    const initialMarkup = ReactDOMServer.renderToString(
        <App  initialData={initialData} />
    );

    return {initialMarkup, initialData }
};

export default serverRender