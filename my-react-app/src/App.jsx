import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Welcome from '../src/components/Welcome'
import Minigame from '../src/components/Minigame'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Macondo&display=swap');</style>
      <Router>
        <Routes>
          <Route exact path='/' element= {<Welcome />} />
          <Route exact path='/maingame' element= {<Minigame />}/>
        </Routes>
      </Router>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
