import React, { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import NavBar from './commons/NavBar';
import Footer from './commons/Footer';
import Home from './page/Home';
import EpisodePage from './page/EpisodePage';
import history from './utils/history';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const moviePage = lazy(() => import('./page/SeasonPage'));

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Suspense fallback={'loading'}>
          <RecoilRoot>
            <div>
              <NavBar />
              <Footer />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movie" component={moviePage} />
                <Route exact path="/seasons/:id" component={EpisodePage} />
              </Switch>
            </div>
          </RecoilRoot>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
