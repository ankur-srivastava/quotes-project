import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const Add = () => {
    const history = useHistory()

    const addQuote = () => {
        // submit data
        // post submit navigate user to all-quotes page
        history.push('/quotes')
    }
    return <QuoteForm onAddQuote={addQuote} />
}

export default Add
