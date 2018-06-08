import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
  color: '#FBDDE4',
  fontSize: 30,
};

export default class Home extends Component {
  render() {
    return (
      <div style={style}>
        WellCome !! this is home page
        <br />
        <Link to="/product">Go to Product</Link>
      </div>
    );
  }
}
