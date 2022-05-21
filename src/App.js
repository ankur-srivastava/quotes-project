import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

export const DUMMY_QUOTES = [
  { id: '1', author: 'Ankur', text: 'First Quote' },
  { id: '2', author: 'Jack', text: 'Second Quote' }
]

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <Quotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
