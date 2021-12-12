import React, { Component } from 'react';

class MyTest extends Component {
  // state로 과일값 초기화
  state = {
    fruits: ['apple', 'banana', 'orange'],
    addFruitName: '',
  };

  // 추가 메소드
  addFruit = (e) => {
    e.preventDefault(); // form 의 기본기능인 새로고침을 방지하기 위해 코딩
    if (this.state.fruits.includes(this.state.addFruitName)) {
      alert('이미 존재하는 과일입니다.');
      return;
    }
    this.setState((state) => ({
      fruits: [...state.fruits].concat(this.state.addFruitName),
      addFruitName: '',
    }));
  };

  handleChange = (e) => {
    this.setState({ addFruitName: e.target.value });
  };

  // 삭제 메소드
  editFruit = (fruit) => {
    const fruitName = window.prompt('변경할 과일 이름을 입력하세요');

    this.setState((state) => ({
      fruits: [...state.fruits]
        .slice(0, state.fruits.indexOf(fruit))
        .concat(
          [fruitName],
          [...state.fruits].slice(
            state.fruits.indexOf(fruit) + 1,
            state.fruits.length
          )
        ),
    }));
  };

  // 삭제 메소드
  deleteFruit = (fruit) => {
    this.setState((state) => ({
      fruits: [...state.fruits].filter((name) => name !== fruit),
    }));
  };

  render() {
    return (
      <div>
        <ul>
          {/* map을 이용하여 Read 구현 */}
          {this.state.fruits.map((fruit) => {
            return (
              <TestChild
                fruit={fruit}
                key={fruit} // 키값은 idx로 사용하지 않음.
                deleteFruit={this.deleteFruit}
                editFruit={this.editFruit}
              />
            );
          })}
        </ul>
        {/* 웹 접근성 높이기 위해 form 사용. */}
        <form onSubmit={this.addFruit}>
          <input
            type="text"
            name="input"
            onChange={this.handleChange}
            value={this.state.addFruitName}
          />
          <button>과일 추가하기</button>
        </form>
      </div>
    ); // return end
  }
}

class TestChild extends Component {
  render() {
    const { fruit, deleteFruit, editFruit } = this.props;
    return (
      <li>
        <b>{fruit}</b>
        <button onClick={() => deleteFruit(fruit)}>X</button>
        <button onClick={() => editFruit(fruit)}>수정하기</button>
      </li>
    ); // return end
  }
}

export default MyTest;
