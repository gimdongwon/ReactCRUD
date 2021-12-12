import axios from 'axios';
import React, { Component } from 'react';
import '../css/Movie.css';
import MovieChild from './MovieChild';

class MyMovie extends Component {
  // 멤버변수, state, static, defaultProps => this keyword 사용
  state = {
    movies: [],
    title: 'guest',
  };
  // 화살표 함수 변수 => (argu) => {event}
  getMovie = async () => {
    // this.setState({ title: 'admin' });
    const {
      data: { data: movies },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    this.setState({ movies });
    // react life cycle hook componentDidMount, componentWillUnmount
  };
  componentDidMount() {
    // console.log('Call componentDidMount');
    this.getMovie();
    // 화면에 컴포넌트가 전부 그려진 후 호출
  }
  // componentWillUnmount() {
  //   console.log('Call componentWillMount');
  //   // 다른 페이지로 이동할 때 호출
  // }
  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <div>
        {movies &&
          movies.movies &&
          movies.movies.map((mv) => {
            return (
              <MovieChild
                key={mv.id}
                id={mv.id}
                year={mv.year}
                title={mv.title}
                summary={mv.summary}
                poster={mv.large_cover_image}
                genres={mv.genres}
              />
            );
          })}
      </div>
    );
  }
}

export default MyMovie;
