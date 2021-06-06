import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllImages from './components/AllImages';
import About from './components/About';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Error from './components/Error';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/all' component={AllImages} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
