import React from 'react'
import Header from './components/Header'
import Trello from './components/Trello'
import './App.css'
function App() {
  return (
    <div className='app'>
      <div className='flex flex-col'>
        <div>
          <Header></Header>
        </div>
        <div className='px-10'>
          <Trello></Trello>
        </div>
      </div>
    </div>
  )
}

export default App