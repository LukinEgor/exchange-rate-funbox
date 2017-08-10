import React from 'react';
import { Link } from 'react-router-dom'

export default class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    const rate = document.getElementsByName('rate')[0].value;
    this.props.update(rate);
  }

  render() {
    return <div>
      <Link to='/'>Rate</Link>
      AdminPanel
      <br />
      <form>
        <input type="text" name="rate" defaultValue={this.props.rate} />
        <input type="button" value="Save" onClick={this.handleSubmit.bind(this)} />
      </form>
    </div>
  }
}
