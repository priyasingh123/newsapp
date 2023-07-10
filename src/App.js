import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar.jsx'
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
    apiKey = process.env.REACT_APP_NEWS_API_KEY
    state = {
      progress: 0
    }

   setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <>
        <Router basename='/newsapp'>
          <LoadingBar color='#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
          <Navbar setCategory={this.setCategory} />
          <Routes>
            <Route exact path='/newsapp' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'general'} />} />
            <Route exact path='/' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'general'} />} />
            <Route exact path='/General' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'general'} />} />
            <Route exact path='/Business' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'business'} />} />
            <Route exact path='/Entertainment' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'entertainment'} />} />
            <Route exact path='/Health' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'health'} />} />
            <Route exact path='/Science' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'science'} />} />
            <Route exact path='/Sports' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'sports'} />} />
            <Route exact path='/Technology' element={<NewsComponent apiKey={this.apiKey} setProgress={this.setProgress} category={'technology'} />} />
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
