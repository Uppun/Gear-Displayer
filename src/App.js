import React from 'react';
import './assets/App.css';
import GearPage from './components/GearPage';
import Landing from './components/Landing';
import {useRoutes} from 'hookrouter';

const routes = {
  '/': () => <Landing />,
  '/build/:buildId*': ({buildId}) => <GearPage buildId = {buildId} />   
};

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className='gear-app'>
      {routeResult}
    </div>
  )
}

export default App;