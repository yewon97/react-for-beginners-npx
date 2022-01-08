import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// BrowerRouter, HashRouter 2가지 종류가 있는데 HashRouter -> http://localhost:3000/#/movie -> #이 붙는 것이다.
// 컴포넌트 import 까먹지 말기!
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
