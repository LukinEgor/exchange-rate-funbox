import React from 'react';
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime';

export default class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    const time = document.getElementsByTagName('input')[0].value;
    const formatTime = new Date(time).getTime();
    const userRate = document.getElementsByTagName('input')[1].value;
    this.props.update(userRate, formatTime);
  }

  render() {
    return <div>
      <Link to='/'>Rate</Link>
      AdminPanel
      <br />
      <form>
        <Datetime
          defaultValue={Date.now()}
          isValidDate={(current, selected) => current > selected} />
        <input
          type="text"
          name="rate"
          defaultValue={this.props.isActiveUserRate ?
            this.props.userRate : this.props.originRate} />
        <input
         type="button"
         value="Save"
         onClick={this.handleSubmit.bind(this)} />
      </form>
    </div>
  }
}
