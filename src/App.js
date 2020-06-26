import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Rooms from './Components/Rooms';
import SingleRooms from './Components/SingleRooms';
import Error from './Components/Error';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:actualRoom" component={SingleRooms} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
