import { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/general' key='general'>
            <News country='in' pageSize={15} category='general' />
          </Route>
          <Route exact path='/entertainment' key='entertainment'>
            <News country='in' pageSize={15} category='entertainment' />
          </Route>
          <Route exact path='/sports' key='sports'>
            <News country='in' pageSize={15} category='sports' />
          </Route>
          <Route exact path='/technology' key='technology'>
            <News country='in' pageSize={15} category='technology' />
          </Route>
          <Route exact path='/business' key='business'>
            <News country='in' pageSize={15} category='business' />
          </Route>
          <Route exact path='/science' key='science'>
            <News country='in' pageSize={15} category='science' />
          </Route>
          <Route exact path='/health' key='health'>
            <News country='in' pageSize={15} category='health' />
          </Route>
        </Switch>
      </Router>
    );
  }
}
