import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
