import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Symptoms from './components/Symptoms';
import Dataset from './components/Dataset';
import TestResults from './components/TestResults';
import Patient from './components/Patient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/symptoms">
              <Symptoms />
            </Route>
            <Route exact path="/results/:email">
              <TestResults />
            </Route>
            <Route exact path="/dataset">
              <Dataset />
            </Route>
            <Route exact path="/patient">
              <Patient />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
