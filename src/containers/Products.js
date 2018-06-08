import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
  color: '#EC6F8C',
  fontSize: 30,
};

export default class Products extends Component {
  render() {
    return (
      <div style={style}>
        hi this is products page
        <br />
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
