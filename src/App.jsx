import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles/main.scss'
import ListAllUrls from './components/ListAllUrls'

function App(){
  return(
    <div className="router">
      <Routes>
        <Route path="/" element={<ListAllUrls/>}/>
      </Routes>
      {/* <ListAllUrls /> */}
    </div>
  )
}

export default App