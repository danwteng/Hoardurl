import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles/main.scss';
import ListAllUrls from './components/ListAllUrls';
import InputUrl from './components/InputUrl';


function App(){
  return(
    <Fragment>
      <div className="input">
        <InputUrl />
      </div>
      <div className="database">
        {/* <Routes>
          <Route path="/hoarding" element={<ListAllUrls/>}/>
        </Routes> */}
        <ListAllUrls />
      </div>
    </Fragment>
  )
}

export default App