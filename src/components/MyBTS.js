// 이미지, 배열 전달

import React, { Component } from 'react';

export class MyBTS extends Component {
  // state 상태에 배열을 기술. 그 후 setState로 값 변경.
  state = {
    idol: ['bts', 'blackpink', 'wanaone'],
    picture: [
      './images/bt.png',
      './images/blackpink.png',
      './images/wanaone.png',
    ],
  };
  render() {
    let arr = this.state.idol;
    let str = [];
    for (let i = 0; i < arr.length; i++) {
      str.push(
        <b key={i} style={{ color: 'blue' }}>
          {arr[i]}&nbsp;
        </b>
      );
    }
    let strImg = this.state.picture.map((item, i) => {
      return <img key={item} alt={item} src={item} width="180" height="150" />;
    });
    const msg = '안녕하세요.';
    const cc = { fontSize: '20pt' };
    return (
      <div style={cc}>
        {/* idols 배열 안내문 아래에는 그림 */}
        <b>MyBTS.js {msg} </b>
        <p></p>
        {str}
        <br />
        {strImg}
      </div>
    );
  }
}
