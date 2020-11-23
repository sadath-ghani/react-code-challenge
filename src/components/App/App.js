import './App.css';

import Planets from '../Planets';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Films from '../Films/Films';
import Residents from '../Residents/Residents';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/planet/:planetName/films" component={Films}></Route>
      <Route path="/planet/:planetName/residents" component={Residents}></Route>
      <Route path="/" component={Planets}></Route>
    </Switch>
  </BrowserRouter>
)

export default App;
