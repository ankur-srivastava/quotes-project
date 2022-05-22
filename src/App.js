import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';
import NotFound from "./pages/NotFound";
import Quotes from "./pages/Quotes";

export const DUMMY_QUOTES = [
  { id: '1', author: 'Ankur', text: 'First Quote' },
  { id: '2', author: 'Jack', text: 'Second Quote' }
]

// Lazy Load
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'))
const Add = React.lazy(() => import('./pages/Add'))

function App() {
  return (
    <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
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
    </Suspense>
  );
}

export default App;
