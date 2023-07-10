import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar.jsx'
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY
    const [progress, setProgress] = useState (0)

    return (
      <>
        <Router>
          <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} /><Navbar/><Routes>
            <Route exact path='/newsapp' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'general'} />} />
            <Route exact path='/' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'general'} />} />
            <Route exact path='/General' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'general'} />} />
            <Route exact path='/Business' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'business'} />} />
            <Route exact path='/Entertainment' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'entertainment'} />} />
            <Route exact path='/Health' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'health'} />} />
            <Route exact path='/Science' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'science'} />} />
            <Route exact path='/Sports' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'sports'} />} />
            <Route exact path='/Technology' element={<NewsComponent apiKey={apiKey} setProgress={setProgress} category={'technology'} />} />
          </Routes>
        </Router>
        </>
    )
}
export default App;

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
