import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RatePanel from './RatePanel.js';
import AdminPanel from './AdminPanel.js';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return <div>
      Hello!
      <h1>{this.props.rate}</h1>
      <Link to='/'>Home</Link>
      <Link to='/admin'>Admin</Link>
      <Switch>
        <Route exact path='/' component={RatePanel}/>
        <Route exact path='/admin' component={AdminPanel}/>
      </Switch>
    </div>
  }
}

//module.exports = App
