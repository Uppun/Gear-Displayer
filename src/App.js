import React from 'react';
import './App.css';
import GearPage from './components/GearPage';
import Landing from './components/Landing';
import {useRoutes} from 'hookrouter';

const routes = {
  '/': () => <Landing />,
  '/build/:buildId*': ({buildId}) => <GearPage buildId = {buildId} />   
};

const App = () => {
  const routeResult = useRoutes(routes);
  console.log(routeResult)

  return routeResult || 'Page not found';
}

export default App;