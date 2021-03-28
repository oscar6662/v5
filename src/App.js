import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';

export default function App() {
  
  return (
    <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/:id" component={NewsPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>   
    </Layout>
  );
}
