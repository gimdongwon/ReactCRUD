import React, { Component } from 'react';

class MyMemo extends Component {
  num = 2;
  state = {
    code: 7080,
    title: 'title',
    todos: [
      {
        id: 0,
        text: 'java',
        checked: false,
      },
      {
        id: 1,
        text: 'javascript',
        checked: true,
      },
      {
        id: 2,
        text: 'python',
        checked: false,
      },
    ],
  };
  handleFirst() {
    alert('일반함수 first');
    console.log('');
  }
  handleTwo = () => {
    this.setState({
      code: 1588,
      title: 'pizza',
    });
  };
  handleAdd = () => {
    const { todos } = this.state;
    this.setState({
      code: 9900,
      title: 'gugu',
      todos: todos.concat({
        id: this.num + 1,
        text: 'C++',
        checked: true,
      }),
    });
  };
  render() {
    const cc = { fontSize: '20pt' };
    const { code, title } = this.state;
    return (
      <div>
        <b>MyMemo</b>
        <br />
        code: {code}, &nbsp; title: {title}
        <button onClick={this.handleFirst} style={cc}>
          함수
        </button>
        <button onClick={this.handleTwo} style={cc}>
          화살표 함수
        </button>
        <button onClick={this.handleAdd} style={cc}>
          배열 추가 함수
        </button>
      </div>
    );
  }
}

export default MyMemo;
