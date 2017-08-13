import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RatePanel from './RatePanel.js';
import AdminPanel from './AdminPanel.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initState();
    this.activateWebsockets();

    window.onfocus = this.updateStateFromLocalStorage.bind(this);
  }

  initState() {
    const savedState = this.getStateFromLocalStorage();
    if (savedState) {
      this.state = savedState;
    } else {
      this.state = {
        originRate: this.props.rate,
        userRate: null,
        dateActiveUserRate: null,
        isActiveUserRate: false,
        timerId: null
      }
      this.updateLocalStorage();
    }
  }

  activateWebsockets() {
    App.cable = ActionCable.createConsumer();
    App.cable.subscriptions.create("RatesChannel", {
      received: (data) =>  {
        const rate = data.result.rates["RUB"];
        this.setState({rate: rate}, this.updateLocalStorage)
      }
    })
  }

  updateStateFromLocalStorage() {
    const savedData = this.getStateFromLocalStorage();
    if (savedData !== this.state) {
      this.setState(savedData);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage["exchange-rate-object"] = JSON.stringify(this.state);
  }

  getStateFromLocalStorage() {
    const savedData = localStorage["exchange-rate-object"];
    return savedData ? JSON.parse(savedData) : null;
  }

  update(userRate, selectedTime) {
    const deltaTime = selectedTime - Date.now();
    this.clearOldTimer();
    const timerId = this.setNewTimer(deltaTime);
    this.setState({
      userRate: userRate,
      dateActiveUserRate: selectedTime,
      isActiveUserRate: true,
      timerId: timerId
    }, this.updateLocalStorage);
  }

  clearOldTimer() {
    if (this.state.timerId) {
      clearTimeout(this.state.timerId);
    }
  }

  setNewTimer(time) {
    return setTimeout(() => {
      this.setState({
        isActiveUserRate: false
      }, this.updateLocalStorage)
    }, time)
  }

  render() {
    return <div>
      <h1>{this.state.isActiveUserRate ?
        this.state.userRate : this.state.originRate}</h1>
      <Switch>
        <Route exact path='/' render={() => (
          <RatePanel state={this.state} />
        )}/>
        <Route exact path='/admin' render={() => (
          <AdminPanel
            originRate={this.state.originRate}
            userRate={this.state.userRate}
            isActiveUserRate={this.state.isActiveUserRate}
            update={this.update.bind(this)} />
        )}/>
      </Switch>
    </div>
  }
}
