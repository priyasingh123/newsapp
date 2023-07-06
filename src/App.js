import './App.css';
import React, {Component} from 'react'
import Navbar from './components/Navbar.jsx'
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends Component {
  setCategory = (category) => {
    this.category = category
    console.log ('category ',this.category)
  }

  render () {
    return (
      <>
        <Router>
          <Navbar setCategory={this.setCategory} />
          <Routes>
            <Route exact path='/General' element={<NewsComponent pageSize={6} category={'general'}/>} /> 
            <Route exact path='/Business' element={<NewsComponent pageSize={6} category={'business'}/>} /> 
            <Route exact path='/Entertainment' element={<NewsComponent pageSize={6} category={'entertainment'}/>} /> 
            <Route exact path='/Health' element={<NewsComponent pageSize={6} category={'health'}/>} /> 
            <Route exact path='/Science' element={<NewsComponent pageSize={6} category={'science'}/>} /> 
            <Route exact path='/Sports' element={<NewsComponent pageSize={6} category={'sports'}/>} /> 
            <Route exact path='/Technology' element={<NewsComponent pageSize={6} category={'technology'}/>} /> 
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
