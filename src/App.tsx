import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Projects from './pages/projects';
import WorkingGroup from './pages/working-group';

function App(): JSX.Element {
  useLayoutEffect(() => {
    window.document.body.classList.add('theme--default');
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/polka-defi">
            <Container width={928}>
              <Header />
              <Projects />
            </Container>
          </Route>
          <Route path="/working-group">
            <Container width={1130}>
              <Header />
              <WorkingGroup />
            </Container>
          </Route>
          <Route path="/">
            <Redirect to="/polka-defi" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
