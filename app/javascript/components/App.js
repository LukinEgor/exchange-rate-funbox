import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RatePanel from './RatePanel.js';
import AdminPanel from './AdminPanel.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: this.props.rate
    }
  }

  update(rate) {
    this.setState({rate: rate});
  }

  render() {
    return <div>
      Hello!
      <h1>{this.state.rate}</h1>
      <Switch>
        <Route exact path='/' render={() => (
          <RatePanel rate={this.state.rate} />
        )}/>
        <Route exact path='/admin' render={() => (
          <AdminPanel rate={this.state.rate} update={this.update.bind(this)} />
        )}/>
      </Switch>
    </div>
  }
}
