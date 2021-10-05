import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Teachers from './components/Teachers/Teachers';
import AllCourses from './components/AllCourses/AllCourses';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route path='/courses'>
            <AllCourses></AllCourses>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
