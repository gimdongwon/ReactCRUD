// 값 전달
// rce, rfce, rafce

import React, { Component } from 'react';

export class MyColor extends Component {
  static defaultProps = {
    kind: 'purple',
    price: 1200,
  };
  render() {
    const cc = { fontSize: '16px' };
    const { kind, price } = this.props;
    return (
      <div style={cc}>
        <b>MyColor.js</b> <br />
        종류: {kind} <br />
        가격: {price}
        <p></p>
      </div>
    );
  }
}

export default MyColor;
