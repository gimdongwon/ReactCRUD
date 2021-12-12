import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './css/style.css';
import './App.css';
import MyColor from './components/MyColor';
import { MyBTS } from './components/MyBTS';
import MyMemo from './components/MyMemo';
import MyMovie from './components/MyMovie';
import MyTest from './components/MyTest';
import App2 from './App2';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul className="menu-wrapper">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mycolor">Color</Link>
            </li>
            <li>
              <Link to="/mybts">BTS</Link>
            </li>
            <li>
              <Link to="/mymemo">Memo</Link>
            </li>
            <li>
              <Link to="/mymovie">Movie</Link>
            </li>
            <li>
              <Link to="/mytest">Test</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<App2 />} />
            <Route path="/mybts" element={<MyBTS />} />
            <Route path="/mycolor" element={<MyColor />} />
            <Route path="/mymemo" element={<MyMemo />} />
            <Route path="/mymovie" element={<MyMovie />} />
            <Route path="/mytest" element={<MyTest />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

// function App() {
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

export default App;

// App.js
