import React from 'react';
import { Link } from 'react-router-dom'

export default class RatePanel extends React.Component {
  render() {
    return <div>
      <div className="menu">
        <Link to='/admin'>set custom rate</Link>
      </div>
    </div>
  }
}
