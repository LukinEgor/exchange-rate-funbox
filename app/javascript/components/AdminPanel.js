import React from 'react';
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime';
import './base';
import 'bootstrap/dist/css/bootstrap';
import * as moment from 'moment';

export default class AdminPanel extends React.Component {
  handleSubmit() {
    const time = document.getElementsByTagName('input')[0].value;
    const formatTime = new Date(time).getTime();
    const userRate = document.getElementsByTagName('input')[1].value;

    this.isValidRate(userRate) ? this.props.update(userRate, formatTime) : alert("Incorrect rate!");
  }

  isValidRate(rate) {
    return !isNaN(rate) && parseFloat(rate) > 0 ? true : false;
  }

  render() {
    return <div>
      <div className="menu">
        <Link to='/'>go to home</Link>
      </div>
      <form>
        <div className="form-group">
          <Datetime
            defaultValue={this.props.lastDate || Date.now()}
            isValidDate={(current, _) => {
              const lastValidDay = current.valueOf() + 24*60*60*1000;
              return lastValidDay > Date.now();
            }} />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="rate"
            defaultValue={this.props.userRate} />
        </div>
        <div className="form-group">
          <input
            className="btn btn-primary pull-right"
            type="button"
            value="Save"
            onClick={this.handleSubmit.bind(this)} />
        </div>
      </form>
    </div>
  }
}
