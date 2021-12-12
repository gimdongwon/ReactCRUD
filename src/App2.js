import React from 'react';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './css/style.css';
import './App.css';
import flower from './img/hydran.png';

class App2 extends React.Component {
  render() {
    return (
      <div>
        <img src={flower} alt="수선화" width="600" height="150" border={2} />
      </div>
    );
  }
}

// function App2() {
//   return (
//     <div>
//       <img src={flower} alt="수선화" width="600" height="150"border={2} />
//       <br />
//       <br />
//       <MyColor />
//       <MyColor kind="snow" price={24} />
//     </div>
//   );
// }

export default App2;

// App.js
