import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

export default class Root extends React.Component {
  render() {
    return <BrowserRouter>
      <App rate={this.props.rate.value} />
    </BrowserRouter>
  }
}
