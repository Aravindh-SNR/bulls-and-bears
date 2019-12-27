import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/register' component={SignIn} />
    </BrowserRouter>
  );
}

export default App;
