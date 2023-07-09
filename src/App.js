import './App.css';
import React, {Component} from 'react'
import Navbar from './components/Navbar.jsx'
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends Component {
  render () {
    return (
      <>
        <Router>
          <Navbar setCategory={this.setCategory} />
          <Routes>
            <Route exact path='/' element={<NewsComponent category={'general'}/>} /> 
            <Route exact path='/General' element={<NewsComponent category={'general'}/>} /> 
            <Route exact path='/Business' element={<NewsComponent category={'business'}/>} /> 
            <Route exact path='/Entertainment' element={<NewsComponent category={'entertainment'}/>} /> 
            <Route exact path='/Health' element={<NewsComponent category={'health'}/>} /> 
            <Route exact path='/Science' element={<NewsComponent category={'science'}/>} /> 
            <Route exact path='/Sports' element={<NewsComponent category={'sports'}/>} /> 
            <Route exact path='/Technology' element={<NewsComponent category={'technology'}/>} /> 
          </Routes>
        </Router>
      </>
    )
  }
}

// function based component
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
