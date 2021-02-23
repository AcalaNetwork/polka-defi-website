import React, { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from './components/Container';
import Header from './components/Header';
import Projects from './pages/projects';

function App() {
  useLayoutEffect(() => {
    window.document.body.classList.add('theme--default');
  }, []);

  return (
    <div className="app">
      <Router>
        <Route>
          <Container width={928}>
            <Header />
            <Projects />
          </Container>
        </Route>
      </Router>
    </div>
  )
}

export default App
