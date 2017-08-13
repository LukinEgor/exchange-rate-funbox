import React from 'react';
import { Link } from 'react-router-dom'

export default class RatePanel extends React.Component {
  render() {
    return <div>
      <Link to='/admin'>Admin</Link>
      {this.props.rate}
      RatePanel
    </div>
  }
}
