import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Map from './components/Map';
import Data from './components/Data';

function App() {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div></div>
      <span className='display-4'>DE</span>forestation<br/><span className='display-4'>MON</span>itoring<br/><span className='display-4'>S</span>ystem
  </nav>
  <div className='row justify-content-center d-flex my-5'>
    <div className='col-sm-6 justify-content-center d-flex bg-dark'>
      <Map  status={[0,1,2]}/>
    </div>
  </div>
  <div className='row justify-content-center d-flex my-5'>
    <div className='col-sm-6 justify-content-center d-flex'>
      <Data active={3} inactive={0} sus ={0}/>
    </div>
  </div>
  </React.Fragment>
  );
}

export default App;
