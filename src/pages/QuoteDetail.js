import { Route, useParams, Link, useRouteMatch } from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min"
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import { DUMMY_QUOTES } from "../App"

const QuoteDetail = () => {
    const params = useParams()
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    const match = useRouteMatch()

    if(!quote) {
        return <p>No Quote Found</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`${match.path}`} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}>View Comments</Link>
            </div>
        </Route>

        <Route path={`${match.path}/comments`} exact>
            <Comments />
        </Route>
    </Fragment>
}

export default QuoteDetail
